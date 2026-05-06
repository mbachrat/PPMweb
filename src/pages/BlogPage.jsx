import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPublishedPosts } from '../lib/blogService';
import { isSupabaseConfigured, supabaseConfigError } from '../lib/supabaseClient';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setError(supabaseConfigError || 'Blog configuration is missing.');
      return;
    }

    let mounted = true;

    getPublishedPosts()
      .then(posts => {
        if (mounted) {
          setBlogPosts(posts);
          setError('');
        }
      })
      .catch(() => {
        if (mounted) {
          setError('Blog posts are unavailable right now.');
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container>
      <Hero>
        <Eyebrow>Blog</Eyebrow>
        <Title>Progress Updates and Condominium Insights</Title>
        <Intro>
          Practical updates, board resources, and community management guidance from the Progress Property Management team.
        </Intro>
      </Hero>

      {loading && <StatusMessage>Loading articles...</StatusMessage>}
      {!loading && error && <StatusMessage>{error}</StatusMessage>}
      {!loading && !error && blogPosts.length === 0 && <StatusMessage>No articles are published yet.</StatusMessage>}

      {!loading && !error && blogPosts.length > 0 && (
        <PostsGrid aria-label="Blog articles">
          {blogPosts.map(post => (
            <PostCard key={post.slug} to={`/blog/${post.slug}`}>
              <PostMeta>
                <span>{post.category}</span>
                <span>By {post.author}</span>
                <span>{post.displayDate}</span>
              </PostMeta>
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <PostFooter>
                <span>{post.readTime}</span>
                <ReadMore>Read article</ReadMore>
              </PostFooter>
            </PostCard>
          ))}
        </PostsGrid>
      )}
    </Container>
  );
};

export default BlogPage;

const Container = styled.main`
  min-height: 70vh;
  background: ${({ theme }) => theme.main.background};
  padding: 170px 6.5vw 110px;
`;

const Hero = styled.section`
  max-width: 900px;
  margin: 0 auto 56px;
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
  font-size: clamp(3.8rem, 6vw, 6.4rem);
  line-height: 1.05;
`;

const Intro = styled.p`
  max-width: 680px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const PostsGrid = styled.section`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
`;

const StatusMessage = styled.p`
  max-width: 900px;
  margin: 0 auto;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const PostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.main.border};
  background: linear-gradient(135deg, rgba(245, 247, 251, 0.05), rgba(245, 247, 251, 0.02));
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    background: linear-gradient(135deg, rgba(245, 247, 251, 0.09), rgba(245, 247, 251, 0.04));
    transform: translateY(-3px);
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;

  span {
    color: ${({ theme }) => theme.main.fonts.muted};
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const PostTitle = styled.h2`
  font-size: clamp(2.3rem, 3vw, 3.2rem);
  line-height: 1.2;
`;

const PostExcerpt = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  color: ${({ theme }) => theme.main.fonts.muted};

  span {
    font-size: 1.4rem;
    color: inherit;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ReadMore = styled.span`
  color: ${({ theme }) => theme.main.highlight} !important;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
`;
