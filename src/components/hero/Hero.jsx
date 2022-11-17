import React from 'react'
import styled from 'styled-components'
import background from "../../assets/img/hero.jpg";

function Hero() {
  return (
    <Outer>
        <HeroImage></HeroImage>
        <Title>Progress PM is a Premier Building Managment Company</Title>
    </Outer>
    
  )
}

export default Hero



const Outer = styled.div`
    
`
const Title = styled.h1`
    position: absolute;
    top: 40vh;
    padding: 40px;
    text-align: center;
    color: ${({ theme }) => theme.nav.background};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: clamp(50px, 5vw, 100px);
    text-shadow: 0 0 10px ${({ theme }) => theme.nav.fonts.hover};

    @media only screen and (max-width: 599px) {
    top: 15vh;
  }
`
const HeroImage = styled.div`
    background-image: url(${background}); 
    background-color: #cccccc; 
    height: 100vh; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    display: flex;
    align-items: center;
    
    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%) brightness(70%);
  

    @media only screen and (max-width: 599px) {
    height: 50vh;
  }
`