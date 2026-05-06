import { supabase } from './supabaseClient';

export const emptyPost = {
  title: '',
  slug: '',
  date: new Date().toISOString().slice(0, 10),
  author: '',
  category: '',
  read_time: '',
  excerpt: '',
  status: 'draft',
  sections: [{ heading: '', body: [''] }],
};

export const toDisplayDate = date => {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
};

export const slugify = value =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const normalizePost = post => ({
  ...post,
  readTime: post.read_time,
  displayDate: toDisplayDate(post.date),
  sections: Array.isArray(post.sections) ? post.sections : [],
});

export const getPublishedPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('date', { ascending: false });

  if (error) throw error;
  return data.map(normalizePost);
};

export const getPublishedPostBySlug = async slug => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (error) throw error;
  return data ? normalizePost(data) : null;
};

export const getAdminPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) throw error;
  return data.map(normalizePost);
};

export const savePost = async post => {
  const payload = {
    title: post.title.trim(),
    slug: (post.slug || slugify(post.title)).trim(),
    date: post.date,
    author: post.author.trim(),
    category: post.category.trim(),
    read_time: post.read_time.trim(),
    excerpt: post.excerpt.trim(),
    status: post.status,
    sections: post.sections
      .map(section => ({
        heading: section.heading.trim(),
        body: section.body.map(paragraph => paragraph.trim()).filter(Boolean),
      }))
      .filter(section => section.heading || section.body.length),
    updated_at: new Date().toISOString(),
  };

  const query = post.id
    ? supabase.from('blog_posts').update(payload).eq('id', post.id).select().single()
    : supabase.from('blog_posts').insert(payload).select().single();

  const { data, error } = await query;
  if (error) throw error;
  return normalizePost(data);
};

export const deletePost = async id => {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) throw error;
};

