import React, { useRef, forwardRef } from 'react'
import styled from 'styled-components'
import CardTwo from '../extras/CardTwo'
import baxter from '../../assets/img/baxter.png'
import { Divider } from '@mui/material'


function Communities() {   


  return (
    <Outer>
         <Anchor class="anchor" id="Community"></Anchor>
        <Title  >
            Communities
            <Divider sx={{opacity: 0.7}} />
        </Title>
        <Buildings>
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />
            <CardTwo 
        title= "The Palace"
        sub= "HCC 187"
        ainfo= "1270 Maple Crossing Blvd. Burlington"
        winfo= "http://www.thepalacecondo.com"
        src= {baxter}
        website= "http://www.thepalacecondo.com"
    />

        </Buildings>
    </Outer>
  )
}

export default forwardRef(Communities);

const Outer = styled.div`
    display: flex;
    flex-direction: column;
   padding-left: 6.5vw;
   padding-right: 6.5vw;
   margin-top: 15vh;
   margin-bottom: 15vh;
  
`
const Anchor = styled.a`
     display: block;
    position: relative;
    top: -127px;
    visibility: hidden;
`
const Title = styled.h1`
    font-size: 70px;
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    background: -webkit-linear-gradient(45deg,#0699CD, #152E66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 75px;

    @media only screen and (max-width: 960px) {
        margin-bottom: 50px;
        font-size: 50px;
  }
`
const Buildings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    @media only screen and (max-width: 717px) {
        justify-content: center;
    }
`



// const buildings = [
//     {
//        title: "The Palace",
//        sub: "HCC 187",
//        ainfo: "1270 Maple Crossing Blvd. Burlington",
//        winfo: "http://www.thepalacecondo.com",
//        src: "baxter"
//     },
//     {
//        title: "The Palace",
//        sub: "HCC 187",
//        ainfo: "1270 Maple Crossing Blvd. Burlington",
//        winfo: "http://www.thepalacecondo.com",
//        src: "baxter"
//     }

// ]