import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import background from '../../assets/img/hero.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Owned and Operated in Canada', value: '100% Canadian' },
    { label: 'Support Coverage', value: '24/7/365' },
  ];

  return (
    <HeroSection>
      <HeroImage role='presentation' aria-hidden='true' />
      <Overlay />
      <HeroContent>
        <Eyebrow>Progress Property Management Ltd.</Eyebrow>
        <Headline>Forward-thinking management for modern communities</Headline>
        <Subcopy>
          Transform your condominium operations with proactive strategies, transparent communication, and a dedicated team built for modern living.
        </Subcopy>
        <HeroActions>
          <PrimaryButton as={Link} to='/contact#form'>Request Proposal</PrimaryButton>
          <SecondaryButton as={Link} to='/#services'>Explore Services</SecondaryButton>
        </HeroActions>
        <HeroStats>
          {stats.map(({ label, value }) => (
            <StatCard key={label}>
              <StatValue>{value}</StatValue>
              <StatLabel>{label}</StatLabel>
            </StatCard>
          ))}
        </HeroStats>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;

const HeroSection = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: clamp(120px, 15vh, 170px) 6.5vw clamp(72px, 10vh, 120px);


  @media (max-width: 768px) {
    min-height: 100svh;
    align-items: flex-start;
    padding: 120px 6.5vw 72px;
  }

`;

const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  filter: grayscale(40%) brightness(55%);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.95), rgba(11, 13, 18, 0.5));
`;

const HeroContent = styled.div`
  position: relative;
  width: min(1100px, 90vw);
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.accent || theme.main.fonts.secondary};
`;

const Headline = styled.h1`
  font-size: clamp(3.2rem, 6vw, 6.4rem);
  color: ${({ theme }) => theme.main.fonts.primary};
  max-width: 720px;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Subcopy = styled.p`
  max-width: 540px;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const PrimaryButton = styled.a`
  padding: 16px 28px;
  border-radius: 999px;
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.3rem;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 14px 20px;
  }
`;

const SecondaryButton = styled.a`
  padding: 16px 28px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.main.border};
  color: ${({ theme }) => theme.main.fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.3rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    color: ${({ theme }) => theme.main.highlight};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding: 14px 20px;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-top: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(21, 26, 34, 0.75);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
`;

const StatValue = styled.p`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-weight: 600;
`;

const StatLabel = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
