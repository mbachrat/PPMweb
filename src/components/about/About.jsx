import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from '../extras/Card'
import goal from "../../assets/symbols/goals.svg"
import about from '../../assets/img/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{

    AOS.init({duration: 2000});


  },[])



  return (
    <Outer data-aos="fade-up" data-aos-once="true">
        <Anchor class="anchor" id="About"></Anchor>
        <Left>
            <Title >
                About Us
            </Title>
            <Body>
            Progress Property Management Ltd. is committed to providing total quality management to Condominium Corporations in Ontario. 
            <br/> <br/> 
            We strive to meet and exceed the demands of modern property management. By continually enhancing our knowledge base and seeking new ways to better serve our clients, Progress Property Management not only meets our clients’ property management needs, we exceed their expectations.
            </Body>
            <Cards data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
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
   padding-left: 6.5vw;
   padding-right: 6.5vw;
   
   margin-bottom: 15vh;
    gap: 30px;
`
const Anchor = styled.a`
     display: block;
    position: relative;
    top: -127px;
    visibility: hidden;
`


const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Right = styled.img`
   height: 70vh;
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
  margin-bottom: 25px;
  margin-top: 15vh;

    @media only screen and (max-width: 960px) {
        margin-bottom: 15px;
        font-size: 50px;
        margin-top: 8vh;
  }
`
const Body = styled.p`
     font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 24px;
    margin-bottom: 80px;

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
    margin-left: -20px;
    
  }
`