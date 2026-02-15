import React from 'react';
import styled from 'styled-components';
import CardTwo from '../extras/CardTwo';
import baxter from '../../assets/img/baxter.png';
import map from '../../assets/img/Map.png';
import W1 from '../../assets/img/W1.png';
import W2 from '../../assets/img/W2.png';

const steps = [
  {
    step: '01',
    title: 'Analyze & Assess',
    body: 'Comprehensive evaluation of current operations, service contracts, and resident feedback to surface opportunities.',
  },
  {
    step: '02',
    title: 'Strategize & Plan',
    body: 'Custom roadmaps align financial goals, capital priorities, and people plans with board objectives.',
  },
  {
    step: '03',
    title: 'Execute & Optimize',
    body: 'Implementation and continuous improvement with transparent reporting and measurable ROI.',
  },
];

const bullets = ['Proven record of success', 'Dedicated team of experts', 'Customized playbooks for every community'];

function Communities() {
  return (
    <Section>
      <Anchor id='Community' />
      <Spotlight>
        <SpotlightCopy>
          <Eyebrow>Ready to Transform?</Eyebrow>
          <SpotlightTitle>Ready to Transform Your Community?</SpotlightTitle>
          <SpotlightBody>
            Join boards that trust our proven methodology to modernize condo operations, strengthen financial performance, and elevate resident experiences.
          </SpotlightBody>
          <BulletList>
            {bullets.map((bullet) => (
              <Bullet key={bullet}>{bullet}</Bullet>
            ))}
          </BulletList>
          <CTAButton href='/contact#contact'>Schedule Free Consultation</CTAButton>
        </SpotlightCopy>
        {/* <SpotlightMedia>
          <SpotlightImage src={map} alt='Progress PM operations dashboard' />
        </SpotlightMedia> */}
      </Spotlight>

      {/* <Process>
        <ProcessTitle>Our Proven Three-Step Solution</ProcessTitle>
        <ProcessGrid>
          {steps.map(({ step, title, body }) => (
            <ProcessCard key={title}>
              <ProcessStep>{step}</ProcessStep>
              <ProcessCardTitle>{title}</ProcessCardTitle>
              <ProcessBody>{body}</ProcessBody>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </Process> */}

      {/* <CommunitiesTitle>Communities We Support</CommunitiesTitle>
      <Buildings>
        <CardTwo
          title='Waterview'
          sub='NNSCC 292'
          ainfo='1270 Maple Crossing Blvd. Burlington'
          src={W1}
          srcTwo={W2}
          website='http://www.thepalacecondo.com'
        />
        <CardTwo
          title='The Palace'
          sub='HCC 187'
          ainfo='1270 Maple Crossing Blvd. Burlington'
          src={baxter}
          srcTwo={map}
          website='http://www.thepalacecondo.com'
        />
        <CardTwo
          title='Downtown Residences'
          sub='HCC 322'
          ainfo='2200 Lakeshore Road, Burlington'
          src={baxter}
          srcTwo={map}
          website='http://www.thepalacecondo.com'
        />
      </Buildings> */}
    </Section>
  );
}

export default Communities;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 10vh 6.5vw 12vh;
`;

const Anchor = styled.span`
  position: relative;
  top: -120px;
`;

const Spotlight = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  align-items: center;
`;

const SpotlightCopy = styled.div`
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

const SpotlightTitle = styled.h2`
  font-size: clamp(3rem, 4.5vw, 4.8rem);
`;

const SpotlightBody = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0;
`;

const Bullet = styled.li`
  position: relative;
  padding-left: 26px;
  color: ${({ theme }) => theme.main.fonts.primary};

  &::before {
    content: '✔';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.main.success};
  }
`;

const CTAButton = styled.a`
  margin-top: 12px;
  width: fit-content;
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

const SpotlightMedia = styled.div`
  background: ${({ theme }) => theme.main.card};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.main.border};
  padding: 16px;
`;

const SpotlightImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProcessTitle = styled.h3`
  font-size: clamp(2.4rem, 4vw, 4rem);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const ProcessCard = styled.div`
  background: ${({ theme }) => theme.main.card};
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.main.border};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProcessStep = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.main.elevated};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const ProcessCardTitle = styled.h4`
  font-size: 1.8rem;
`;

const ProcessBody = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const CommunitiesTitle = styled.h3`
  font-size: clamp(2.6rem, 4vw, 4.2rem);
`;

const Buildings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;
