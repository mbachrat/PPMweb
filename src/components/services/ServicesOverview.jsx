import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesOverview() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const serviceOptions = [
    {
      title: 'Condominium Management Services',
      description: 'Comprehensive property management solutions for residential communities',
      link: '/management',
    },
    {
      title: 'Developer Services',
      description: 'Our core services integrate operational strategy, technical oversight, and performance management',
      link: '/developer',
    },
  ];

  return (
    <Section data-aos="fade-up" data-aos-once="true">
      <SectionHeader>
        <Eyebrow>SERVICES</Eyebrow>
        <Title>Supporting Condominiums at Every Stage</Title>
        <Description>
          Progress Property Management supports condominiums at every stage—managing established communities, transitioning existing buildings, and smoothly transforming new construction. We also partner with developers from conception, providing expert management guidance through every phase of development.
        </Description>
      </SectionHeader>

      <ServiceCards>
        {serviceOptions.map((service, idx) => (
          <ServiceCard
            key={service.title}
            as={Link}
            to={service.link}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <ArrowIcon>→</ArrowIcon>
          </ServiceCard>
        ))}
      </ServiceCards>
    </Section>
  );
}

export default ServicesOverview;

const Section = styled.section`
  padding: 100px 6.5vw;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.6), rgba(21, 26, 33, 0.8)),
    radial-gradient(circle at bottom right, rgba(255, 193, 7, 0.08), transparent 60%);
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media (max-width: 768px) {
    padding: 80px 6.5vw;
  }
`;

const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
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
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: ${({ theme }) => theme.main.fonts.primary};
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.7;
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const ServiceCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.main.highlight}dd, ${({ theme }) => theme.main.highlightSoft}dd);
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.main.highlight};
  min-height: 280px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.main.fonts.primary};
    background: linear-gradient(135deg, ${({ theme }) => theme.main.highlight}ff, ${({ theme }) => theme.main.highlightSoft}ff);
    box-shadow: 0 20px 40px rgba(255, 193, 7, 0.25);
  }

  @media (max-width: 768px) {
    padding: 48px 32px;
    min-height: 240px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #0b0d12;
  margin: 0 0 12px 0;
  position: relative;
  z-index: 1;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(11, 13, 18, 0.8);
  margin: 0;
  position: relative;
  z-index: 1;
`;

const ArrowIcon = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 2rem;
  color: #0b0d12;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: translateX(8px);
  }
`;
