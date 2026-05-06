import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  deletePost,
  emptyPost,
  getAdminPosts,
  savePost,
  slugify,
} from '../lib/blogService';
import { isSupabaseConfigured, supabase, supabaseConfigError } from '../lib/supabaseClient';

const clonePost = post => ({
  ...post,
  sections: post.sections?.length
    ? post.sections.map(section => ({
        heading: section.heading || '',
        body: section.body?.length ? section.body : [''],
      }))
    : [{ heading: '', body: [''] }],
});

const BlogDashboardPage = () => {
  const [session, setSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(clonePost(emptyPost));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setAuthReady(true);
      return undefined;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthReady(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setIsAdmin(false);
      setPosts([]);
      return;
    }

    let mounted = true;
    setCheckingAdmin(true);
    setError('');

    supabase
      .from('blog_admins')
      .select('user_id')
      .eq('user_id', session.user.id)
      .maybeSingle()
      .then(({ data, error: adminError }) => {
        if (!mounted) return;
        if (adminError) throw adminError;
        setIsAdmin(Boolean(data));
        if (!data) {
          setError('This account is not authorized to manage blog posts.');
        }
      })
      .catch(adminError => {
        if (mounted) {
          setIsAdmin(false);
          setError(
            adminError?.code === '42P01'
              ? 'Blog dashboard tables are not set up yet. Run supabase/blog_setup.sql in the Supabase SQL editor first.'
              : 'Unable to verify dashboard access.'
          );
        }
      })
      .finally(() => {
        if (mounted) {
          setCheckingAdmin(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [session]);

  useEffect(() => {
    if (isAdmin) {
      loadPosts();
    }
  }, [isAdmin]);

  const selectedId = selectedPost.id || 'new';
  const publishedCount = useMemo(
    () => posts.filter(post => post.status === 'published').length,
    [posts]
  );

  const loadPosts = async () => {
    try {
      const nextPosts = await getAdminPosts();
      setPosts(nextPosts);
      setError('');
    } catch {
      setError('Unable to load dashboard posts.');
    }
  };

  const handleLogin = async event => {
    event.preventDefault();
    setError('');
    setMessage('');

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSelectedPost(clonePost(emptyPost));
    setMessage('');
    setError('');
  };

  const updatePost = updates => {
    setSelectedPost(current => ({ ...current, ...updates }));
  };

  const updateSection = (index, updates) => {
    setSelectedPost(current => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, ...updates } : section
      ),
    }));
  };

  const addSection = () => {
    setSelectedPost(current => ({
      ...current,
      sections: [...current.sections, { heading: '', body: [''] }],
    }));
  };

  const removeSection = index => {
    setSelectedPost(current => ({
      ...current,
      sections:
        current.sections.length > 1
          ? current.sections.filter((_section, sectionIndex) => sectionIndex !== index)
          : current.sections,
    }));
  };

  const handleSave = async event => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');

    try {
      const savedPost = await savePost({
        ...selectedPost,
        slug: selectedPost.slug || slugify(selectedPost.title),
      });
      setSelectedPost(clonePost(savedPost));
      await loadPosts();
      setMessage('Post saved.');
    } catch (saveError) {
      setError(saveError.message || 'Unable to save post.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedPost.id) return;
    const confirmed = window.confirm(`Delete "${selectedPost.title}"? This cannot be undone.`);
    if (!confirmed) return;

    setSaving(true);
    setError('');
    setMessage('');

    try {
      await deletePost(selectedPost.id);
      setSelectedPost(clonePost(emptyPost));
      await loadPosts();
      setMessage('Post deleted.');
    } catch (deleteError) {
      setError(deleteError.message || 'Unable to delete post.');
    } finally {
      setSaving(false);
    }
  };

  if (!isSupabaseConfigured) {
    return (
      <Container>
        <Panel>
          <Eyebrow>Admin</Eyebrow>
          <Title>Blog dashboard</Title>
          <Alert role="alert">
            {supabaseConfigError || 'Supabase is not configured. Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.'}
          </Alert>
        </Panel>
      </Container>
    );
  }

  if (!authReady) {
    return (
      <Container>
        <Panel>
          <Status>Loading dashboard...</Status>
        </Panel>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container>
        <LoginCard onSubmit={handleLogin}>
          <Eyebrow>Admin</Eyebrow>
          <Title>Blog dashboard</Title>
          <Intro>Sign in to manage blog posts.</Intro>
          {error && <Alert role="alert">{error}</Alert>}
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} required />
          </Field>
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </LoginCard>
      </Container>
    );
  }

  if (checkingAdmin || !isAdmin) {
    return (
      <Container>
        <Panel>
          <DashboardTop>
            <div>
              <Eyebrow>Admin</Eyebrow>
              <Title>Blog dashboard</Title>
            </div>
            <SecondaryButton type="button" onClick={handleLogout}>Logout</SecondaryButton>
          </DashboardTop>
          {checkingAdmin ? (
            <Status>Checking access...</Status>
          ) : (
            <>
              <Alert role="alert">{error}</Alert>
              <AccessDetails>
                <span>Signed in as</span>
                <code>{session.user.email}</code>
                <span>User id</span>
                <code>{session.user.id}</code>
              </AccessDetails>
            </>
          )}
        </Panel>
      </Container>
    );
  }

  return (
    <Container>
      <DashboardTop>
        <div>
          <Eyebrow>Admin</Eyebrow>
          <Title>Blog dashboard</Title>
          <Intro>{posts.length} posts, {publishedCount} published.</Intro>
        </div>
        <SecondaryButton type="button" onClick={handleLogout}>Logout</SecondaryButton>
      </DashboardTop>

      {(message || error) && (
        <MessageRow>
          {message && <Success>{message}</Success>}
          {error && <Alert role="alert">{error}</Alert>}
        </MessageRow>
      )}

      <DashboardGrid>
        <PostsPanel>
          <PanelHeader>
            <SectionTitle>Posts</SectionTitle>
            <SmallButton type="button" onClick={() => setSelectedPost(clonePost(emptyPost))}>New post</SmallButton>
          </PanelHeader>
          <PostList>
            {posts.map(post => (
              <PostListButton
                key={post.id}
                type="button"
                className={selectedId === post.id ? 'active' : ''}
                onClick={() => setSelectedPost(clonePost(post))}
              >
                <strong>{post.title}</strong>
                <span>{post.category} · {post.displayDate} · {post.status}</span>
              </PostListButton>
            ))}
          </PostList>
        </PostsPanel>

        <EditorPanel as="form" onSubmit={handleSave}>
          <PanelHeader>
            <SectionTitle>{selectedPost.id ? 'Edit post' : 'Create post'}</SectionTitle>
            <ButtonGroup>
              {selectedPost.id && (
                <DangerButton type="button" onClick={handleDelete} disabled={saving}>Delete</DangerButton>
              )}
              <PrimaryButton type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save post'}</PrimaryButton>
            </ButtonGroup>
          </PanelHeader>

          <FieldsGrid>
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={selectedPost.title} onChange={event => updatePost({ title: event.target.value })} required />
            </Field>
            <Field>
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" value={selectedPost.slug} placeholder="auto-generated from title" onChange={event => updatePost({ slug: slugify(event.target.value) })} />
            </Field>
            <Field>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={selectedPost.date} onChange={event => updatePost({ date: event.target.value })} required />
            </Field>
            <Field>
              <Label htmlFor="status">Status</Label>
              <Select id="status" value={selectedPost.status} onChange={event => updatePost({ status: event.target.value })}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </Select>
            </Field>
            <Field>
              <Label htmlFor="author">Author</Label>
              <Input id="author" value={selectedPost.author} onChange={event => updatePost({ author: event.target.value })} required />
            </Field>
            <Field>
              <Label htmlFor="category">Category</Label>
              <Input id="category" value={selectedPost.category} onChange={event => updatePost({ category: event.target.value })} required />
            </Field>
            <Field>
              <Label htmlFor="read-time">Read time</Label>
              <Input id="read-time" value={selectedPost.read_time} placeholder="4 min read" onChange={event => updatePost({ read_time: event.target.value })} required />
            </Field>
          </FieldsGrid>

          <Field>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" value={selectedPost.excerpt} onChange={event => updatePost({ excerpt: event.target.value })} rows={3} required />
          </Field>

          <SectionsHeader>
            <SectionTitle>Article sections</SectionTitle>
            <SmallButton type="button" onClick={addSection}>Add section</SmallButton>
          </SectionsHeader>

          <SectionStack>
            {selectedPost.sections.map((section, index) => (
              <SectionEditor key={`${index}-${selectedPost.id || 'new'}`}>
                <SectionEditorTop>
                  <Label>Section {index + 1}</Label>
                  <SmallButton type="button" onClick={() => removeSection(index)} disabled={selectedPost.sections.length === 1}>Remove</SmallButton>
                </SectionEditorTop>
                <Field>
                  <Label htmlFor={`section-heading-${index}`}>Heading</Label>
                  <Input id={`section-heading-${index}`} value={section.heading} onChange={event => updateSection(index, { heading: event.target.value })} />
                </Field>
                <Field>
                  <Label htmlFor={`section-body-${index}`}>Paragraphs</Label>
                  <Textarea
                    id={`section-body-${index}`}
                    value={section.body.join('\n\n')}
                    onChange={event =>
                      updateSection(index, {
                        body: event.target.value.split(/\n\s*\n/),
                      })
                    }
                    rows={6}
                  />
                </Field>
              </SectionEditor>
            ))}
          </SectionStack>
        </EditorPanel>
      </DashboardGrid>
    </Container>
  );
};

export default BlogDashboardPage;

const Container = styled.main`
  min-height: 70vh;
  background: ${({ theme }) => theme.main.background};
  padding: 170px 6.5vw 110px;
`;

const Panel = styled.section`
  max-width: 920px;
  margin: 0 auto;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.main.border};
  background: ${({ theme }) => theme.main.surface};
  border-radius: 8px;
`;

const LoginCard = styled.form`
  max-width: 480px;
  margin: 0 auto;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.main.border};
  background: ${({ theme }) => theme.main.surface};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.accent};
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: clamp(3.2rem, 5vw, 5.2rem);
  line-height: 1.05;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const DashboardTop = styled.div`
  max-width: 1220px;
  margin: 0 auto 28px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const DashboardGrid = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 340px) 1fr;
  gap: 24px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const PostsPanel = styled.aside`
  border: 1px solid ${({ theme }) => theme.main.border};
  background: ${({ theme }) => theme.main.surface};
  border-radius: 8px;
  padding: 22px;
  height: fit-content;
`;

const EditorPanel = styled.section`
  border: 1px solid ${({ theme }) => theme.main.border};
  background: ${({ theme }) => theme.main.surface};
  border-radius: 8px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostListButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.main.card};
  cursor: pointer;

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 1.5rem;
    line-height: 1.35;
  }

  span {
    margin-top: 6px;
    color: ${({ theme }) => theme.main.fonts.muted};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &.active,
  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
  }
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.main.fonts.secondary};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 6px;
`;

const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.main.card};
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.main.fonts.primary};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.main.highlight};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.main.card};
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.main.fonts.primary};
  resize: vertical;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.main.highlight};
  }
`;

const SectionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;

const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionEditor = styled.div`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.main.card};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SectionEditorTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const SecondaryButton = styled.button`
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.main.card};
  color: ${({ theme }) => theme.main.fonts.primary};
  cursor: pointer;
`;

const SmallButton = styled(SecondaryButton)`
  min-height: 36px;
  padding: 0 12px;
  font-size: 1.3rem;
`;

const DangerButton = styled(SecondaryButton)`
  color: #ffb4a8;
`;

const MessageRow = styled.div`
  max-width: 1220px;
  margin: 0 auto 20px;
`;

const Alert = styled.p`
  padding: 12px 14px;
  border: 1px solid rgba(255, 180, 168, 0.4);
  background: rgba(255, 180, 168, 0.08);
  border-radius: 6px;
  color: #ffb4a8;
`;

const Success = styled.p`
  padding: 12px 14px;
  border: 1px solid rgba(119, 216, 107, 0.35);
  background: rgba(119, 216, 107, 0.08);
  border-radius: 6px;
  color: ${({ theme }) => theme.main.success};
`;

const Status = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const AccessDetails = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 8px 14px;

  span {
    color: ${({ theme }) => theme.main.fonts.muted};
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  code {
    color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 1.4rem;
    overflow-wrap: anywhere;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
