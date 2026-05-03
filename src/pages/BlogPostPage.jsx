import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogPostBySlug } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Container>
      <Article>
        <BackLink to="/blog">Back to blog</BackLink>

        <Header>
          <Meta>
            <span>{post.category}</span>
            <span>By {post.author}</span>
            <span>{post.displayDate}</span>
            <span>{post.readTime}</span>
          </Meta>
          <Title>{post.title}</Title>
          <Excerpt>{post.excerpt}</Excerpt>
        </Header>

        <Content>
          {post.sections.map(section => (
            <Section key={section.heading}>
              <SectionTitle>{section.heading}</SectionTitle>
              {section.body.map(paragraph => (
                <Paragraph key={paragraph}>{paragraph}</Paragraph>
              ))}
            </Section>
          ))}
        </Content>
      </Article>
    </Container>
  );
};

export default BlogPostPage;

const Container = styled.main`
  min-height: 70vh;
  background: ${({ theme }) => theme.main.background};
  padding: 170px 6.5vw 110px;
`;

const Article = styled.article`
  max-width: 860px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 44px;
  color: ${({ theme }) => theme.main.highlight};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.main.border};
`;

const Meta = styled.div`
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

const Title = styled.h1`
  font-size: clamp(3.4rem, 5.6vw, 5.8rem);
  line-height: 1.08;
`;

const Excerpt = styled.p`
  max-width: 720px;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const Content = styled.div`
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 3vw, 3rem);
  line-height: 1.2;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
  font-size: 1.7rem;
`;
