import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../extras/Card';
import goal from '../../assets/symbols/goals.svg';
import hammer from '../../assets/symbols/hammer-svgrepo-com.svg';
import data from '../../assets/symbols/data.svg';
import services from '../../assets/symbols/services.svg';
import aboutBg from '../../assets/img/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const problems = [
    {
      title: 'Hands-on & personal',
      body: 'Faster Response times and a deeper understanding of your needs with direct access to dedicated managers.',
      src: hammer,
      items: ['On-site presence', 'Proactive oversight', 'Stronger relationships'],
    },
    {
      title: 'Tech-enabled Management',
      body: 'Less admin, fewer delays, and more transparency with a modern software platform built for condos.',
      src: data,
      items: ['Smart platforms', 'Streamlined communication', 'Data-driven decisions'],
    },
    {
      title: 'Tailored Strategies',
      body: 'A management plan that reflects your community needs built around your building, residents, and goals.',
      src: services,
      items: ['Customized', 'Community-focused planning', 'Flexible approach'],
    },
  ];

  return (
    <Section data-aos='fade-up' data-aos-once='true'>
      <Anchor id='About' />
      <Intro>
        <Eyebrow>ABOUT US</Eyebrow>
        <Title>What does real progress look like?</Title>
        <Body>
          Progress Property Management combines modern technology with hands-on, on-site management to deliver attentive, responsive service. We believe better condo management happens when innovation and personal connection work together.
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
  position: relative;
  background-image: url(${aboutBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(6, 8, 12, 0.7);
    pointer-events: none;
  }

  > * {
    position: relative; /* bring content above overlay */
  }
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
