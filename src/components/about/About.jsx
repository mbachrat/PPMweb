import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../extras/Card';
import goal from '../../assets/symbols/goals.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const problems = [
    {
      title: 'Stagnant Growth',
      body: 'Boards juggle day-to-day fires and rarely get to focus on long-term planning.',
      src: goal,
      items: ['Limited insight into building health', 'Aging capital plans', 'Reactive budgeting'],
    },
    {
      title: 'Team Inefficiency',
      body: 'Disconnected stakeholders slow decisions and frustrate residents.',
      src: goal,
      items: ['Manual, error-prone workflows', 'Communication gaps', 'Accountability issues'],
    },
    {
      title: 'Outdated Systems',
      body: 'Legacy platforms make it hard to deliver the service level modern communities expect.',
      src: goal,
      items: ['Data locked in silos', 'Security vulnerabilities', 'No clear reporting'],
    },
  ];

  return (
    <Section data-aos='fade-up' data-aos-once='true'>
      <Anchor id='About' />
      <Intro>
        <Eyebrow>Common Problems</Eyebrow>
        <Title>We See Every Day.</Title>
        <Body>
          Most condo communities struggle with the same operational roadblocks that slow progress and hurt resident satisfaction. We pair modern strategies with attentive service to eliminate the noise.
        </Body>
      </Intro>
      <Cards>
        {problems.map((problem) => (
          <Card key={problem.title} {...problem} />
        ))}
      </Cards>
    </Section>
  );
}

export default About;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 6.5vw 10vh;
`;

const Anchor = styled.span`
  position: relative;
  top: -100px;
`;

const Intro = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.muted};
`;

const Title = styled.h2`
  font-size: clamp(3.2rem, 5vw, 5rem);
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const Body = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;
