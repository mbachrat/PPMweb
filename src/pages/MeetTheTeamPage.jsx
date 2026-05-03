import React from 'react';
import styled from 'styled-components';
import propertyTeamImage from '../assets/img/propertyteam.jpg';

const teamCopy = [
  'We are a local, family-run condominium management company - proudly Canadian owned and operated - serving the Golden Horseshoe region of Southern Ontario since 2004. From the beginning, our philosophy has been simple: strong communities are built through genuine relationships, thoughtful service, and managers who truly care.',
  'We believe great condominium management is not about rushing through a corporate rat race. It is about slowing down enough to do things properly. Our clients feel seen, heard, and valued - because to us, every corporation matters.',
  'Our property managers are actively engaged and present on site, with intentionally smaller portfolios that allow them to stay focused and fully invested in the communities they manage. This hands-on approach means better communication, quicker response times, and a deeper understanding of each property\'s unique needs.',
  'We specialize in tailored, full-scope management solutions for high-end condominium living, partnering with like-minded Boards who value quality, transparency, and long-term stewardship. The result is a management experience that feels personal, proactive, and dependable - because it is.',
];

const careerCopy = [
  'We are a family-run business, and that shows in how we treat our team. Our office is relaxed, supportive, and built on real relationships. This is the kind of place where you actually look forward to coming in each morning - catching up with your work family, settling into your day, and doing meaningful work without unnecessary pressure.',
  'We believe that great managers do their best work when they are supported, not stretched thin. That is why we prioritize manageable workloads, open communication, and a healthy work-life balance. Our team members have direct access to the President and Vice Presidents of the company, ensuring guidance, mentorship, and support are always close at hand.',
  'If you are someone who values peace of mind, balance, and being trusted to do your job well, you will feel at home here. We are not about burnout culture or corporate posturing - we are about sustainability, for our clients and our people.',
  'While we are not always actively hiring, we recognize a great fit when we see one. If you align with our values and believe you would be a strong addition to our team, we are always open to a conversation - and sometimes, we will even make room for the right person.',
];

const MeetTheTeamPage = () => (
  <Container>
    <HeroSection>
      <HeroContent>
        <Eyebrow>Our Team</Eyebrow>
        <Title>A Management Firm That Puts People First</Title>
        <DescriptionStack>
          {teamCopy.map((paragraph) => (
            <Description key={paragraph}>{paragraph}</Description>
          ))}
        </DescriptionStack>
      </HeroContent>
      <ImageContainer>
        <TeamImage src={propertyTeamImage} alt="Progress Property Management team" />
      </ImageContainer>
    </HeroSection>

    <CareersSection id="opportunities">
      <CareersContent>
        <Eyebrow>Careers</Eyebrow>
        <CareersTitle>Why Work With Us</CareersTitle>
        <DescriptionStack>
          {careerCopy.map((paragraph) => (
            <Description key={paragraph}>{paragraph}</Description>
          ))}
        </DescriptionStack>
        <CTAButton href="mailto:info@progresspm.ca">Start a Conversation</CTAButton>
      </CareersContent>
    </CareersSection>
  </Container>
);

export default MeetTheTeamPage;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.main.background};
  color: ${({ theme }) => theme.main.fonts.primary};
  padding-top: 110px;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 6.5vw 88px;
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 48px;
  }
`;

const HeroContent = styled.div`
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
  max-width: 760px;
  font-size: clamp(3.8rem, 6vw, 6.2rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const DescriptionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Description = styled.p`
  max-width: 780px;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const TeamImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.main.border};
  box-shadow: ${({ theme }) => theme.main.shadow};
`;

const CareersSection = styled.section`
  background:
    linear-gradient(135deg, rgba(11, 13, 18, 0.78), rgba(21, 26, 33, 0.92)),
    radial-gradient(circle at top right, rgba(255, 157, 27, 0.12), transparent 58%);
  border-top: 1px solid ${({ theme }) => theme.main.border};
  padding: 88px 6.5vw 104px;
`;

const CareersContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CareersTitle = styled.h2`
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-top: 14px;
  padding: 14px 22px;
  border-radius: 999px;
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`;
