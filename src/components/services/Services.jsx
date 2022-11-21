import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Clip from "../../assets/symbols/Clip.svg"

function Services() {
  return (
    <Outer>
        <Title>
            Services
            <Divider sx={{ bgcolor: "white", opacity: 0.1, margin: "10px" }} />
        </Title >
        
        <Tools>
            <Combo>
                <Logo src={Clip} />
                <Text>
                Overseeing Building Staff
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Contract Summary Database
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Long-Term Capital Planning
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Financial and Accounting Services
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Warranty & Insurance Services
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                CEF -Collection Services
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Meeting Supervision
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Proprietary Online Community Portal
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Instant Mass Communication Tools
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                24/7 and 365 day Customer Care Centre
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Legal Records Administration
                </Text>
            </Combo>
            <Combo>
            <Logo src={Clip} />
                <Text>
                Special Project Administration
                </Text>
            </Combo>
        </Tools>
    </Outer>
  )
}

export default Services

const Outer = styled.div`
    background: rgb(21,46,102);
background: linear-gradient(90deg, rgba(21,46,102,1) 0%, rgba(16,77,132,1) 12%, rgba(11,114,168,1) 31%, rgba(6,153,205,1) 55%);
padding-left: 6.5vw;
   padding-right: 6.5vw;
`
const Title = styled.h1`
    font-family: ${({ theme }) => theme.main.fontFamily.primary};
     color: ${({ theme }) => theme.main.background};
     font-size: 60px;
     padding-bottom:30px ;
     padding-top:70px ;
`
const Tools = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom:100px ;
    column-gap: 100px;
    row-gap: 70px;
    margin-left: 40px;


    @media only screen and (max-width: 1020px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10vw;
        margin-left: 0px;
  }

`
const Combo = styled.div`
    display: flex;
    height: 40px;
    gap: 7px;
`
const Logo = styled.img`
   filter:  brightness(10) invert(0.9);
`
const Text = styled.p`
    display: flex;
    align-self: center;
     font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: ${({ theme }) => theme.main.background};
`