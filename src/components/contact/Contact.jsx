import React from 'react'
import styled from 'styled-components'
import phone from '../../assets/symbols/phone.svg'
import location from '../../assets/symbols/location.svg'
import email from '../../assets/symbols/email.svg'
import map from "../../assets/img/Map.png"






function Contact() {
  return (
    <ContactSection>
      <Anchor id="contact"></Anchor>
      <ContentWrapper>
        <LeftContent>
          <SectionHeader>
            <CompanyName>Progress Property Management Ltd</CompanyName>
            <Description>
              Reach out to us with any questions or inquiries. We're here to help.
            </Description>
          </SectionHeader>

          <ContactCards>
            <ContactCard>
              <IconWrapper>
                <Icon src={location} alt="Location" />
              </IconWrapper>
              <CardContent>
                <CardTitle>Head Office</CardTitle>
                <CardText>
                  392 John Street<br />
                  Burlington, ON L7R 2K4
                </CardText>
              </CardContent>
            </ContactCard>

            <ContactCard>
              <IconWrapper>
                <Icon src={phone} alt="Phone" />
              </IconWrapper>
              <CardContent>
                <CardTitle>Phone</CardTitle>
                <LocationGroup>
                  <LocationName>Burlington</LocationName>
                  <LocationInfo>
                    Phone: 289 635 2050<br />
                    Fax: 289 635 2050
                  </LocationInfo>
                </LocationGroup>
                <LocationGroup>
                  <LocationName>Toronto</LocationName>
                  <LocationInfo>
                    Phone: 647 847 1230
                  </LocationInfo>
                </LocationGroup>
              </CardContent>
            </ContactCard>

            <ContactCard>
              <IconWrapper>
                <Icon src={email} alt="Email" />
              </IconWrapper>
              <CardContent>
                <CardTitle>Email</CardTitle>
                <EmailLink href="mailto:info@progresspm.ca">
                  info@progresspm.ca
                </EmailLink>
              </CardContent>
            </ContactCard>
          </ContactCards>
        </LeftContent>

        <RightContent>
          <MapContainer></MapContainer>
        </RightContent>
      </ContentWrapper>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
  padding: 100px 6.5vw;
  background-color: ${({ theme }) => theme.main.bg};
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media only screen and (max-width: 960px) {
    padding: 80px 6.5vw;
  }

  @media only screen and (max-width: 600px) {
    padding: 60px 6.5vw;
  }
`;

const Anchor = styled.span`
  display: block;
  position: relative;
  top: -120px;
  visibility: hidden;
  height: 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CompanyName = styled.h1`
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.main.fonts.primary};
  margin: 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
  margin: 0;
`;

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactCard = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(245, 247, 251, 0.05), rgba(245, 247, 251, 0.02));
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 12px;
  transition: all 0.3s ease;
  align-items: center;

  &:hover {
    border-color: ${({ theme }) => theme.main.highlight};
    background: linear-gradient(135deg, rgba(245, 247, 251, 0.1), rgba(245, 247, 251, 0.05));
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: rgba(255, 193, 7, 0.15);
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
  filter: brightness(1.5);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.main.fonts.primary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardText = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
  margin: 0;
`;

const LocationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;

  &:not(:last-child) {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.nav.border};
  }
`;

const LocationName = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.main.highlight};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const LocationInfo = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.5;
  margin: 0;
`;

const EmailLink = styled.a`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.main.highlight};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.main.highlightSoft};
    text-decoration: underline;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: stretch;

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const MapContainer = styled.div`
  background-image: url(${map});
  background-color: #1a1a1a;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 400px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.nav.border};
  overflow: hidden;
`;
