import React from 'react'
import styled from 'styled-components'
import background from "../../assets/img/buildings.jpeg";

function HeroContact() {
  return (
    <HeroSection>
      <HeroImage></HeroImage>
      <Overlay></Overlay>
      <HeroContent>
        <Eyebrow>GET IN TOUCH</Eyebrow>
        <Title>Contact Us</Title>
        <Subtitle>We'd love to hear from you. Let's discuss how we can help transform your community.</Subtitle>
      </HeroContent>
    </HeroSection>
  )
}

export default HeroContact

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    min-height: 50vh;
  }

  @media only screen and (max-width: 599px) {
    min-height: 40vh;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${background});
  background-color: #1a1a1a;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(60%) brightness(35%);
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.95), rgba(11, 13, 18, 0.7));
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 6.5vw;
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

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 5.6rem);
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.main.fonts.primary};
  line-height: 1.1;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
  line-height: 1.6;
  margin: 0;
`;