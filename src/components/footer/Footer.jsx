import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../assets/img/ppmlogo.png';
import fb from '../../assets/symbols/logo-facebook-svgrepo-com.svg';

function Footer() {
  const navColumns = [
    {
      title: 'Residents',
      items: [
        { label: 'Resident Registration', href: 'https://app.condocontrol.com/registration', external: true },
        { label: 'Resident Login', href: 'https://app.condocontrol.com/login', external: true },
        { label: 'Resources', href: 'https://www.condoauthorityontario.ca/resources/', external: true },
      ],
    },
    {
      title: 'Services',
      items: [
        { label: 'Status Certificate', href: 'https://app.condocontrol.com/status-certificates/begin-order', external: true },
        { label: 'Service Request', href: 'https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request', external: true },
        { label: 'Contractors', href: 'https://app.vendorpm.com/signup', external: true },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '/#About' },
        { label: 'Community', href: '/#Community' },
        { label: 'Contact', href: '/contact#contact' },
        { label: 'Request for Proposal', href: '/contact#form' },
      ],
    },
  ];

  return (
    <Outer>
      <Top>
        <Brand>
          <Image src={logo} width={220} alt='Progress Property Management logo' />
          <BrandCopy>
            Transforming condominium communities through attentive service, transparent communications, and proactive strategy.
          </BrandCopy>
          <ContactGrid>
            <ContactLabel>Visit</ContactLabel>
            <ContactValue>392 John Street, Burlington, ON L7R 2K4</ContactValue>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>info@progresspm.ca</ContactValue>
          </ContactGrid>
          <CTAButton href='/contact#contact'>Schedule Free Consultation</CTAButton>
        </Brand>

        <Columns>
          {navColumns.map(({ title, items }) => (
            <Column key={title}>
              <ColumnTitle>{title}</ColumnTitle>
              <ColumnLinks>
                {items.map(({ label, href, external }) =>
                  external ? (
                    <ColumnLink key={label} href={href} target='_blank' rel='noreferrer'>
                      {label}
                    </ColumnLink>
                  ) : (
                    <ColumnLink as={Link} key={label} to={href}>
                      {label}
                    </ColumnLink>
                  )
                )}
              </ColumnLinks>
            </Column>
          ))}
        </Columns>
      </Top>
      <Divider />
      <Bottom>
        <Left>© {new Date().getFullYear()} Progress Property Management Ltd. All rights reserved.</Left>
        <SocialLink href='https://www.facebook.com/Progresspm/' target='_blank' rel='noreferrer'>
          <Socials src={fb} alt='Facebook' />
        </SocialLink>
      </Bottom>
    </Outer>
  );
}

export default Footer;

const Outer = styled.footer`
  background: ${({ theme }) => theme.main.surface};
  padding: 80px 6.5vw 40px;
`;

const Top = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Brand = styled.div`
  flex: 1.25;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  filter: brightness(100); /* keep full-color while sitting on dark */
`;

const BrandCopy = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
  max-width: 380px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px 32px;
`;

const ContactLabel = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.main.fonts.muted};
`;

const ContactValue = styled.span`
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 14px 20px;
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 1.3rem;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;

const Columns = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ColumnTitle = styled.h4`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.main.fonts.secondary};
  letter-spacing: 0.2em;
`;

const ColumnLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnLink = styled.a`
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 1.4rem;
  opacity: 0.85;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.main.highlight};
    opacity: 1;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.main.border};
  margin: 48px 0 24px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const Left = styled.p`
  color: ${({ theme }) => theme.main.fonts.muted};
  font-size: 1.2rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme }) => theme.main.card};
  border: 1px solid ${({ theme }) => theme.main.border};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.main.highlight};
    transform: translateY(-2px);
  }
`;

const Socials = styled.img`
  width: 18px;
  filter: invert(1);
`;

