import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from "../../assets/img/hero.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {


  useEffect(()=>{

    AOS.init({duration: 2000});


  },[])




  return (
    <Outer>
        <HeroImage></HeroImage>
        <Title data-aos="fade">Progress PM is a Premier Building Managment Company</Title>
    </Outer>
    
  )
}

export default Hero



const Outer = styled.div`
    
`
const Title = styled.h1`
    position: absolute;
    top: 35vh;
    padding: 40px;
    text-align: center;
    color: ${({ theme }) => theme.nav.background};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: clamp(50px, 5vw, 100px);
    text-shadow: 0 0 10px ${({ theme }) => theme.nav.fonts.hover};
    opacity: 0;
    transition: opacity 3s;


    @media only screen and (max-width: 599px) {
    top: 10vh;
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