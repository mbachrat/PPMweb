import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'




function CardTwo({
    title,
    sub,
    ainfo,
    winfo,
    src,
  }){

   
  return (
    <Outer>
        
       <Title>
        {title}
       </Title>
       <Subtitle>
         {sub}
       </Subtitle>
       <Image src = {src} />
       <Info>
       <Box>
        <BoxTitle>
          Address
        </BoxTitle>
        <BoxInfo>
            {ainfo}
        </BoxInfo>
       </Box>
       <Box>
        <BoxTitle>
            Website
        </BoxTitle>
        <BoxInfo>
            {winfo}
        </BoxInfo>
       </Box>
       </Info>
      
    </Outer>
   
  )
}

export default CardTwo

const Outer = styled.div`
display: flex;
flex-direction: column;
    width: 400px;
   
`
const Subtitle = styled.h3`
  color: ${({ theme }) => theme.nav.fonts.high};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 15px;
    padding-bottom: 20px;
`
const Title = styled.h1`
    color: ${({ theme }) =>  theme.main.fonts.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    font-size: 30px;
   
    
`
const Image = styled.img`
   border-radius: 15px;
   /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    margin-bottom: 20px;
    opacity: 0.7;

    transition: opacity 0.5s;

    &:hover {
        
        opacity: 1;
    }
    
`
const Info = styled.div`
display: flex;
background-color:${({ theme }) =>  theme.main.fonts.four};
border-radius: 15px;
padding: 15px;
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
margin-bottom: 30px;

`
const Box = styled.div`

`
const BoxTitle = styled.h2`
font-family: ${({ theme }) => theme.main.fontFamily.med};
font-size: 19px;
    
`
const BoxInfo = styled.p`
    color: ${({ theme }) => theme.nav.fonts.high};
    font-family: ${({ theme }) => theme.main.fontFamily.light};
    font-size: 15px;
    
`