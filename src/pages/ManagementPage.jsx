import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Services from '../components/services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ManagementPage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const serviceDetails = [
    {
      id: 'on-site-leadership',
      title: 'On-Site Leadership',
      description:
        'Our on-site managers serve as the backbone of your community. They hire, train, and inspire building staff with clear KPIs and continual coaching. With dedicated managers present daily, we ensure that your building runs smoothly and residents receive immediate, personalized attention.',
      benefits: [
        'Daily oversight and proactive problem-solving',
        'Staff training and performance management',
        'Direct resident interactions and relationship building',
        'Real-time issue resolution',
        'Community event coordination',
      ],
    },
    {
      id: 'contract-intelligence',
      title: 'Contract Intelligence',
      description:
        'Managing contracts efficiently is critical to your bottom line. Our centralized contract library keeps renewals, SLAs, and vendor notes transparent and easily accessible. Never miss a renewal date or overlook critical vendor performance metrics again.',
      benefits: [
        'Automated renewal reminders',
        'Transparent vendor SLA tracking',
        'Negotiation support and best pricing',
        'Compliance documentation',
        'Easy access to all contract details',
      ],
    },
    {
      id: 'financial-stewardship',
      title: 'Financial Stewardship',
      description:
        'Sound financial management is essential to community stability. We provide full-service accounting, reserve planning, and board-ready reporting. Our financial experts work to optimize your budget while ensuring full compliance and transparency.',
      benefits: [
        'Monthly financial statements and analysis',
        'Reserve fund planning and forecasting',
        'Budget optimization and cost management',
        'Board-ready financial reports',
        'Audit-ready documentation',
      ],
    },
    {
      id: 'warranty-insurance',
      title: 'Warranty & Insurance',
      description:
        'Protecting your assets and residents is paramount. We navigate claims and coverage options to protect every asset and resident. Our insurance experts ensure you have the right coverage at competitive rates.',
      benefits: [
        'Claims management and support',
        'Coverage recommendations',
        'Insurance policy optimization',
        'Warranty tracking and enforcement',
        'Risk mitigation strategies',
      ],
    },
    {
      id: 'collections-compliance',
      title: 'Collections & Compliance',
      description:
        'Maintaining financial health requires effective collections and strict compliance. We confidently manage arrears and governance requirements with expert support, ensuring your community maintains financial integrity.',
      benefits: [
        'Professional arrears collection',
        'Compliance monitoring and reporting',
        'Legal requirement management',
        'Resident communication protocols',
        'Documentation and record-keeping',
      ],
    },
    {
      id: 'meeting-facilitation',
      title: 'Meeting Facilitation',
      description:
        'Effective board meetings drive community progress. We prepare comprehensive board packages, document decisions, and keep action items accountable. Our team ensures every meeting is productive and well-organized.',
      benefits: [
        'Board package preparation',
        'Meeting agenda development',
        'Detailed meeting minutes',
        'Action item tracking',
        'Meeting facilitation support',
      ],
    },
    {
      id: 'resident-portal',
      title: 'Resident Portal',
      description:
        'Modern communities need modern communication tools. Our branded digital portal provides residents with a seamless experience for announcements, payments, and two-way updates. Improve engagement and streamline communication.',
      benefits: [
        'Branded mobile-friendly portal',
        'Online payment processing',
        'Announcement management',
        'Service request submissions',
        '24/7 resident access',
      ],
    },
    {
      id: 'mass-communications',
      title: 'Mass Communications',
      description:
        'Timely and effective communication is critical. We deliver urgent notices and regular updates across email, SMS, and voice. Ensure your messages reach residents through their preferred communication channels.',
      benefits: [
        'Multi-channel delivery (email, SMS, voice)',
        'Emergency notification capabilities',
        'Scheduled mass communications',
        'Delivery tracking and confirmation',
        'Template management',
      ],
    },
    {
      id: 'service-desk',
      title: '24/7 Service Desk',
      description:
        'Emergencies do not wait for business hours. Our around-the-clock support team triages issues and keeps the board informed. From urgent maintenance to resident concerns, we are always here to help.',
      benefits: [
        'Round-the-clock availability',
        'Emergency response protocols',
        'Issue triage and routing',
        'Resident communication',
        'Board escalation management',
      ],
    },
    {
      id: 'records-compliance',
      title: 'Records & Compliance',
      description:
        'Proper documentation is essential for legal protection and operational efficiency. We provide secure storage, easy retrieval, and audit-ready documentation. Your records are organized, protected, and compliant.',
      benefits: [
        'Secure digital and physical storage',
        'Quick document retrieval',
        'Compliance with retention regulations',
        'Access controls and security',
        'Audit preparation',
      ],
    },
    {
      id: 'capital-planning',
      title: 'Capital Planning',
      description:
        'Major projects require careful planning and funding strategy. We forecast major projects with data-backed funding strategies. Prepare your community for the future with confidence.',
      benefits: [
        'Long-term capital forecasting',
        'Reserve fund analysis',
        'Funding strategy development',
        'Project prioritization',
        'Budget preparation',
      ],
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description:
        'From tender to completion, successful projects require expert oversight. We keep timelines, vendors, and budgets aligned throughout the entire process. Your major projects are in capable hands.',
      benefits: [
        'Vendor selection and tendering',
        'Project timeline management',
        'Budget oversight',
        'Quality control and inspections',
        'Completion documentation',
      ],
    },
  ];

  return (
    <>

      <ServicesWrapper>
        {/* <Services /> */}
      </ServicesWrapper>
      <DetailsSection>
        <Anchor id="ServiceDetails" />
        <SectionHeader data-aos="fade-up">
          <Eyebrow>Deep Dive</Eyebrow>
          <SectionTitle>Understanding Our Services</SectionTitle>
          <SectionDescription>
            Explore each service to learn how we can enhance your community's operations and resident experience.
          </SectionDescription>
        </SectionHeader>

        <ServiceDetailsGrid>
          {serviceDetails.map((service, idx) => (
            <ServiceDetailCard
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx % 3 * 100}
              id={service.id}
            >
              <DetailTitle>{service.title}</DetailTitle>
              <DetailDescription>{service.description}</DetailDescription>

              <BenefitsLabel>Key Benefits:</BenefitsLabel>
              <BenefitsList>
                {service.benefits.map((benefit, bidx) => (
                  <BenefitItem key={bidx}>
                    <BenefitIcon>✓</BenefitIcon>
                    <span>{benefit}</span>
                  </BenefitItem>
                ))}
              </BenefitsList>

            </ServiceDetailCard>
          ))}
        </ServiceDetailsGrid>

        <BottomCTA data-aos="fade-up">
          <CTATitle>Ready to Transform Your Community?</CTATitle>
          <CTADescription>
            Our comprehensive property management services are designed to elevate every aspect of your condo operations.
          </CTADescription>
          <CTAButton as={Link} to="/contact#contact">
            Schedule a Consultation
          </CTAButton>
        </BottomCTA>
      </DetailsSection>
    </>
  );
}

export default ManagementPage;

const Anchor = styled.span`
  position: relative;
  top: -100px;
  display: block;
  height: 0;
`;



const ServicesWrapper = styled.div`
  background-color: ${({ theme }) => theme.main.bg};
`;

const DetailsSection = styled.section`
  padding: 190px 6.5vw;
  background-color: ${({ theme }) => theme.main.bg};

  @media (max-width: 768px) {
    padding: 170px 6.5vw;
  }
`;

const SectionHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 80px;
  text-align: center;
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

const SectionTitle = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
`;

const ServiceDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
`;

const ServiceDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(245, 247, 251, 0.05), rgba(245, 247, 251, 0.02));
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 16px;
  transition: all 0.3s ease;
  scroll-margin-top: 150px;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    background: linear-gradient(135deg, rgba(245, 247, 251, 0.1), rgba(245, 247, 251, 0.05));
    transform: translateY(-4px);
  }
`;

const DetailTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.main.highlight};
  margin: 0;
`;

const DetailDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.7;
  margin: 0;
`;

const BenefitsLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.main.fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 8px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.5;
`;

const BenefitIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateX(4px);
  }
`;

const BottomCTA = styled.div`
  max-width: 700px;
  margin: 80px auto 0;
  padding: 60px 40px;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 157, 27, 0.05));
  border: 1px solid ${({ theme }) => theme.main.highlight};
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: ${({ theme }) => theme.main.fonts.primary};
  margin: 0;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  margin: 0;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;
