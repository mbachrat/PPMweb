import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Outer>
        <HeroImage />
        <Title>Progress PM is a Premier Building Managment Company</Title>
    </Outer>
    
  )
}

export default Hero



const Outer = styled.div`
    
`
const Title = styled.h1`
   
`
const HeroImage = styled.div`
    /* background-image: url("../../assets/img/hero.jpg"); 
    background-color: #cccccc; 
    height: 500px; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;  */
`