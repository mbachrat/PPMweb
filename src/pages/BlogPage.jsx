import React from 'react';
import styled from 'styled-components';

const BlogPage = () => (
  <Container>
    <Hero>
      <Eyebrow>Blog</Eyebrow>
      <Title>Progress Updates and Condominium Insights</Title>
      <Intro>
        Practical updates, board resources, and community management guidance from the Progress Property Management team.
      </Intro>
    </Hero>

    <EmptyState>
      <EmptyTitle>Articles coming soon</EmptyTitle>
      <EmptyCopy>
        This section is ready for company updates, condominium management notes, and helpful resources as new posts are prepared.
      </EmptyCopy>
    </EmptyState>
  </Container>
);

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

const EmptyState = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.main.border};
  background:
    linear-gradient(135deg, rgba(26, 30, 37, 0.92), rgba(16, 20, 27, 0.92)),
    radial-gradient(circle at top right, rgba(255, 157, 27, 0.12), transparent 60%);
`;

const EmptyTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 12px;
`;

const EmptyCopy = styled.p`
  max-width: 620px;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;
