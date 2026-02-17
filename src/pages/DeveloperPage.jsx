import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import ApiIcon from '@mui/icons-material/Api';

function DeveloperPage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const benefits = [
    {
      icon: <ApiIcon sx={{ fontSize: 48 }} />,
      percentage: '100%',
      label: 'Pre development Advisory',
      description: 'Operational input during design phase' ,
    },
    {
      icon: <StorageIcon sx={{ fontSize: 48 }} />,
      percentage: '100%',
      label: 'Construction & Turnover Oversight',
      description: 'Commissioning support, Deficiency tracking, Asset registry creation',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      percentage: '100%',
      label: 'Lease-Up & Stabilization',
      description: 'Preventative maintenance implementation',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      percentage: '24/7',
      label: 'Long-Term Asset Management',
      description: 'Financial reporting & forecasting',
    },
  ];

  return (
    <>
      <HeroSection data-aos="fade-up" data-aos-once="true">
        <Anchor id="Developer" />
        <HeroContent>
          <Eyebrow>DEVELOPER SERVICES</Eyebrow>
          <Headline>Built for Developers. Structured for Performance.</Headline>
          <Description>
We partner with real estate developers from pre-construction through stabilization to protect asset value, streamline operations, and position properties for long-term success.          </Description>
          <HeroButton as={Link} to="/contact#contact">
            Get started today
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <BenefitsSection data-aos="fade-up" data-aos-once="true">
        <SectionTitle>Core Services</SectionTitle>
        <SectionSubtitle>
"We deliver end-to-end operational support, from pre-development planning through long-term asset management, ensuring your property performs efficiently from day one.""        </SectionSubtitle>
        <BenefitsGrid>
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <IconWrapper>{benefit.icon}</IconWrapper>
              <Percentage>{benefit.percentage}</Percentage>
              <BenefitLabel>{benefit.label}</BenefitLabel>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      <FeaturesSection data-aos="fade-up" data-aos-once="true">
        <Anchor id="Features" />
        <SectionTitle>Integration Features</SectionTitle>
        <FeaturesList>
          <FeatureItem>
            <FeatureTitle>Comprehensive API</FeatureTitle>
            <FeatureDescription>
              Access all property management data with our well-documented REST API
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Real-time Webhooks</FeatureTitle>
            <FeatureDescription>
              Receive instant notifications for property updates, payments, and maintenance requests
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Advanced Analytics</FeatureTitle>
            <FeatureDescription>
              Leverage data-driven insights with our advanced reporting and analytics tools
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Custom Workflows</FeatureTitle>
            <FeatureDescription>
              Build automated workflows tailored to your specific property management needs
            </FeatureDescription>
          </FeatureItem>
        </FeaturesList>
      </FeaturesSection>

      <CtaSection data-aos="fade-up" data-aos-once="true">
        <Anchor id="DeveloperCTA" />
        <CtaContent>
          <CtaTitle>Ready to Get Started?</CtaTitle>
          <CtaDescription>
            Join hundreds of developers building on our platform. Access documentation, sandbox environment, and dedicated support.
          </CtaDescription>
          <CtaButtons>
            <PrimaryCtaButton as={Link} to="/contact#contact">
              Request API Access
            </PrimaryCtaButton>
            <SecondaryCtaButton href="https://docs.progresspm.ca" target="_blank" rel="noopener noreferrer">
              View Documentation
            </SecondaryCtaButton>
          </CtaButtons>
        </CtaContent>
      </CtaSection>
    </>
  );
}

export default DeveloperPage;

const Anchor = styled.span`
  position: relative;
  top: -100px;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 190px 6.5vw;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.98), rgba(21, 26, 33, 0.95));
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media (max-width: 768px) {
    min-height: auto;
    padding: 170px 6.5vw;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Eyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.muted};
`;

const Headline = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  color: ${({ theme }) => theme.main.fonts.primary};
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  max-width: 600px;
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;

const BenefitsSection = styled.section`
  padding: 80px 6.5vw;
  background-color: ${({ theme }) => theme.main.bg};

  @media (max-width: 768px) {
    padding: 60px 6.5vw;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: ${({ theme }) => theme.main.fonts.primary};
  text-align: center;
  margin-bottom: 16px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, rgba(245, 247, 251, 0.05), rgba(245, 247, 251, 0.02));
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    background: linear-gradient(135deg, rgba(245, 247, 251, 0.1), rgba(245, 247, 251, 0.05));
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background-color: rgba(${({ theme }) => theme.main.highlightRgb || '255, 193, 7'}, 0.15);
  color: ${({ theme }) => theme.main.highlight};
  margin-bottom: 16px;
`;

const Percentage = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.main.highlight};
  margin-bottom: 8px;
`;

const BenefitLabel = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.primary};
  margin-bottom: 8px;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.5;
`;

const FeaturesSection = styled.section`
  padding: 80px 6.5vw;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.5), rgba(21, 26, 33, 0.8));
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media (max-width: 768px) {
    padding: 60px 6.5vw;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;

  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 40px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  background: linear-gradient(135deg, rgba(245, 247, 251, 0.05), rgba(245, 247, 251, 0.02));
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    background: linear-gradient(135deg, rgba(245, 247, 251, 0.1), rgba(245, 247, 251, 0.05));
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
`;

const CtaSection = styled.section`
  padding: 80px 6.5vw;
  background-color: ${({ theme }) => theme.main.bg};

  @media (max-width: 768px) {
    padding: 60px 6.5vw;
  }
`;

const CtaContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CtaTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const CtaDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
`;

const CtaButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;

const SecondaryCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.nav.border};
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    color: ${({ theme }) => theme.main.highlight};
    background: rgba(255, 255, 255, 0.05);
  }
`;
