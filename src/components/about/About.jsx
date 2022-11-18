import React from 'react'
import styled from 'styled-components'
import Card from '../extras/Card'
import goal from "../../assets/symbols/goals.svg"
import about from '../../assets/img/about.png'

function About() {
  return (
    <Outer>
        <Left>
            <Title>
                About Us
            </Title>
            <Body>
            Progress Property Management Ltd. is committed to providing total quality management to Condominium Corporations in Ontario. 
            <br/> <br/> 
            We strive to meet and exceed the demands of modern property management. By continually enhancing our knowledge base and seeking new ways to better serve our clients, Progress Property Management not only meets our clients’ property management needs, we exceed their expectations.
            </Body>
            <Cards>
            <Card
                title="Our Goal"
                body ="Our goals and objectives are to provide a more personalized degree of service to our customers, and a higher level of comfort and protection through the preservation of property value."
                src={goal}
            />
            <Card
                title="Our Goal"
                body ="Our goals and objectives are to provide a more personalized degree of service to our customers, and a higher level of comfort and protection through the preservation of property value."
                src={goal}
            />
            <Card
                title="Our Goal"
                body ="Our goals and objectives are to provide a more personalized degree of service to our customers, and a higher level of comfort and protection through the preservation of property value."
                src={goal}
            />

            </Cards>
        </Left>
        <Right src={about} />
    </Outer>
  )
}

export default About

const Outer = styled.div`
    display: flex;
    justify-content: center;
    height: 70vh;
   padding-left: 6.5vw;
   padding-right: 6.5vw;
   margin-top: 15vh;
   margin-bottom: 15vh;
    gap: 30px;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Right = styled.img`

   @media only screen and (max-width: 1290px) {
    display: none;
  }

`
const Title = styled.h1`
    font-size: 70px;
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    background: -webkit-linear-gradient(45deg,#0699CD, #152E66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    margin-bottom: -70px;

    @media only screen and (max-width: 960px) {
        margin-bottom: 15px;
        font-size: 50px;
  }
`
const Body = styled.p`
     font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 24px;


    @media only screen and (max-width: 960px) {
        margin-bottom: 80px;
    
  }
`
const Cards = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
   gap: 40px;


    @media only screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    
  }
`