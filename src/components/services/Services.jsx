import React, { useEffect } from 'react';
import styled from 'styled-components';
import Clip from '../../assets/symbols/Clip.svg';
import dataIcon from '../../assets/symbols/data.svg';
import bank from '../../assets/symbols/bank.svg';
import check from '../../assets/symbols/check.svg';
import connect from '../../assets/symbols/connect.svg';
import docs from '../../assets/symbols/docs.svg';
import goals from '../../assets/symbols/goals.svg';
import idea from '../../assets/symbols/idea.svg';
import measure from '../../assets/symbols/measure.svg';
import servicesIcon from '../../assets/symbols/services.svg';
import suit from '../../assets/symbols/suit.svg';
import team from '../../assets/symbols/team.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: Clip,
    title: 'On-Site Leadership',
    body: 'Hire, train, and inspire building staff with clear KPIs and continual coaching.',
  },
  {
    icon: dataIcon,
    title: 'Contract Intelligence',
    body: 'Centralized contract library keeps renewals, SLAs, and vendor notes transparent.',
  },
  {
    icon: bank,
    title: 'Financial Stewardship',
    body: 'Full-service accounting, reserve planning, and board-ready reporting.',
  },
  {
    icon: servicesIcon,
    title: 'Warranty & Insurance',
    body: 'Navigate claims and coverage options to protect every asset and resident.',
  },
  {
    icon: suit,
    title: 'Collections & Compliance',
    body: 'Confidently manage arrears and governance requirements with expert support.',
  },
  {
    icon: idea,
    title: 'Meeting Facilitation',
    body: 'Prepare board packages, document decisions, and keep action items accountable.',
  },
  {
    icon: team,
    title: 'Resident Portal',
    body: 'A branded digital experience for announcements, payments, and two-way updates.',
  },
  {
    icon: connect,
    title: 'Mass Communications',
    body: 'Deliver urgent notices and regular updates across email, SMS, and voice.',
  },
  {
    icon: check,
    title: '24/7 Service Desk',
    body: 'Around-the-clock support team to triage issues and keep the board informed.',
  },
  {
    icon: docs,
    title: 'Records & Compliance',
    body: 'Secure storage, easy retrieval, and audit-ready documentation.',
  },
  {
    icon: goals,
    title: 'Capital Planning',
    body: 'Forecast major projects with data-backed funding strategies.',
  },
  {
    icon: measure,
    title: 'Project Management',
    body: 'From tender to completion, we keep timelines, vendors, and budgets aligned.',
  },
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Section>
      <Header data-aos='fade-up'>
        <Eyebrow>Services</Eyebrow>
        <Title>Solutions That Transform Your Community.</Title>
        <Subtitle>
          Our comprehensive suite is designed to cover every aspect of condo governance, operations, and resident experience.
        </Subtitle>
      </Header>
      <ServiceGrid data-aos='fade-up' data-aos-delay='100'>
        {services.map(({ icon, title, body }) => (
          <ServiceCard key={title}>
            <ServiceIcon>
              <img src={icon} alt='' aria-hidden='true' />
            </ServiceIcon>
            <ServiceTitle>{title}</ServiceTitle>
            <ServiceBody>{body}</ServiceBody>
          </ServiceCard>
        ))}
      </ServiceGrid>
      <CTA data-aos='fade-up'>
        <CTAContent>
          <CTAHeadline>Ready to get started?</CTAHeadline>
          <CTAText>Let’s build a roadmap that accelerates efficiency and elevates resident experiences.</CTAText>
        </CTAContent>
        <CTAButton href='/contact#contact'>Schedule Free Consultation</CTAButton>
      </CTA>
    </Section>
  );
}

export default Services;

const Section = styled.section`
  background: radial-gradient(circle at top left, rgba(255, 157, 27, 0.14), transparent 45%),
    ${({ theme }) => theme.main.card};
  padding: 100px 6.5vw;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Header = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.muted};
`;

const Title = styled.h2`
  font-size: clamp(3.4rem, 5vw, 5.6rem);
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const Subtitle = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.main.elevated};
  border-radius: 18px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.main.border};
  min-height: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.main.highlight};
  }
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    filter: invert(0.02) brightness(1.5);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const ServiceBody = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
  font-size: 1.4rem;
`;

const CTA = styled.div`
  background: ${({ theme }) => theme.main.elevated};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.main.border};
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

const CTAContent = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CTAHeadline = styled.h3`
  font-size: 2.4rem;
`;

const CTAText = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const CTAButton = styled.a`
  padding: 16px 28px;
  border-radius: 999px;
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  font-size: 1.2rem;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;
