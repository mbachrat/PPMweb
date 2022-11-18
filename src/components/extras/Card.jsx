import React from 'react'
import styled from 'styled-components'

function Card({
    title,
    body,
    src,
  }) {
  return (
    <Outer>
        <TextBox>
            <Title>
                {title}
            </Title>
            <Body>
                {body}
            </Body>
        </TextBox>
         <Logo>
            <Inside src={src} />
        </Logo>
    </Outer>
   
  )
}

export default Card

const Outer = styled.div`
    height: 255px;

    
`
const TextBox = styled.div`
    background-color: ${({ theme }) => theme.main.fonts.four};
    border-radius: 7px;
    width: 250px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    
`
const Title = styled.h1`
    color: ${({ theme }) => theme.main.fonts.secondary};
    font-family: ${({ theme }) => theme.main.fontFamily.bold};
    padding: 10px;
    font-size: 22px;
    padding-top: 30px;
`
const Body = styled.p`
    color: ${({ theme }) => theme.main.fonts.primary};
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
    padding: 10px;
    
`
const Logo = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center;
    background-color:${({ theme }) => theme.main.fonts.third}; 
    border-radius: 100px;
    height: 55px;
    width: 55px;
    position: relative;
    top: -285px;
    left: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

`
const Inside = styled.img`
    height: 35px;
    width: 45px;
    
`