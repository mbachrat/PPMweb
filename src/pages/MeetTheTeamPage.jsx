import React from 'react';
import styled from 'styled-components';
import propertyTeamImage from '../assets/img/propertyteam.jpg';

const MeetTheTeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      role: 'Position',
      image: 'https://via.placeholder.com/300x300?text=Team+Member+1'
    },
    {
      id: 2,
      name: 'Team Member 2',
      role: 'Position',
      image: 'https://via.placeholder.com/300x300?text=Team+Member+2'
    },
    {
      id: 3,
      name: 'Team Member 3',
      role: 'Position',
      image: 'https://via.placeholder.com/300x300?text=Team+Member+3'
    },
    {
      id: 4,
      name: 'Team Member 4',
      role: 'Position',
      image: 'https://via.placeholder.com/300x300?text=Team+Member+4'
    },
  ];

  const keyPillars = [
    {
      id: 1,
      title: 'Accessible',
      description: 'It is easy to reach, use, and understand for everyone. Our software can run the same way.'
    },
    {
      id: 2,
      title: 'Friendly',
      description: 'Striving for a software that is reliable and focused on the user\'s privacy.'
    },
    {
      id: 3,
      title: 'Trusted',
      description: 'Striving to be a friendly, fun and useful platform.'
    },
  ];

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <Title>Our Team.</Title>
          <Subtitle>Our Strength</Subtitle>
          <Description>
            Together, we strive to deliver the best solutions for our clients, while also supporting each other's growth and development.
          </Description>
        </HeroContent>
        <ImageContainer>
          <TeamImage src={propertyTeamImage} alt="Our Team" />
        </ImageContainer>
      </HeroSection>

      {/* <KeyPillarsSection>
        <KeyPillarsTitle>Key Pillars</KeyPillarsTitle>
        <KeyPillarsSubtitle>
          We believe that the key pillars that support our vision, mission, and values.
        </KeyPillarsSubtitle>
        <PillarsGrid>
          {keyPillars.map((pillar) => (
            <PillarCard key={pillar.id}>
              <PillarIcon>●</PillarIcon>
              <PillarTitle>{pillar.title}</PillarTitle>
              <PillarDescription>{pillar.description}</PillarDescription>
            </PillarCard>
          ))}
        </PillarsGrid>
      </KeyPillarsSection> */}

      {/* <TeamMembersSection>
        <SectionTitle>Meet the Team</SectionTitle>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.id}>
              <TeamImage src={member.image} alt={member.name} />
              <TeamInfo>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
              </TeamInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamMembersSection> */}

      <OpportunitiesSection id="opportunities">
        <OpportunitiesContent>
          <OpportunitiesTitle>Want to join us</OpportunitiesTitle>
          <OpportunitiesSubtitle>email us at <OpportunitiesEmail href="mailto:jobs@ppm.com">jobs@ppm.com</OpportunitiesEmail></OpportunitiesSubtitle>
        </OpportunitiesContent>
      </OpportunitiesSection>
    </Container>
  );
};

export default MeetTheTeamPage;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.main.bg};
  color: ${({ theme }) => theme.nav.fonts.primary};
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 20px;
    gap: 40px;
  }
  @media (max-width: 480px) {
    padding: 40px 16px;
    gap: 24px;
  }`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.nav.fonts.high};
  margin: 0;
  max-width: 500px;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 500px;
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const KeyPillarsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const KeyPillarsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const KeyPillarsSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.nav.fonts.high};
  margin: 0 0 40px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const PillarCard = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 12px;
  text-align: left;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.main.highlight};
  }
`;

const PillarIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.main.highlight};
  margin-bottom: 16px;
`;

const PillarTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const PillarDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.nav.fonts.high};
  margin: 0;
  line-height: 1.6;
`;

const TeamMembersSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 40px 0;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TeamCard = styled.div`
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const TeamInfo = styled.div`
  margin-top: 16px;
`;

const TeamName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TeamRole = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.nav.fonts.high};
  margin: 0;
`;

const OpportunitiesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const OpportunitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
`;

const OpportunitiesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const OpportunitiesSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.nav.fonts.high};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const OpportunitiesEmail = styled.a`
  color: ${({ theme }) => theme.main.highlight};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
