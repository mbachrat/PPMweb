import React from 'react'
import styled from 'styled-components'
import background from "../../assets/img/buildings.jpeg";

function HeroContact() {
  return (
    <Outer>
        <HeroImage></HeroImage>
        <Title>CONTACT US</Title>
    </Outer>
  )
}

export default HeroContact


const Outer = styled.div`
    
`
const Title = styled.h1`
    position: absolute;
    top: 17vh;
    width: 100vw;
    text-align: center;
    color: ${({ theme }) => theme.nav.background};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: clamp(30px, 6vw, 50px);
    text-shadow: 0 0 10px ${({ theme }) => theme.nav.fonts.hover};

    @media only screen and (max-width: 960px) {
    top: 30vh;
  }

    @media only screen and (max-width: 599px) {
    top: 12vh;
  }
`
const HeroImage = styled.div`
    background-image: url(${background}); 
    background-color: #cccccc; 
    height: 30vh; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    display: flex;
    align-items: center;
    
    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%) brightness(70%);
  
    @media only screen and (max-width: 960px) {
    height: 45vh;
  }

    @media only screen and (max-width: 599px) {
    height: 20vh;
  }
`