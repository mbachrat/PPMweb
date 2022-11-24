import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import phone from '../../assets/symbols/phone.svg'
import location from '../../assets/symbols/location.svg'
import email from '../../assets/symbols/email.svg'
import map from "../../assets/img/Map.png"






function Contact() {
  return (
    <Outer>
      <Anchor class="anchor" id="contact"></Anchor>
     <Left>
        <Title>
        Progress Property Managment Ltd
        </Title>
        <Box>
          <Icon src={location} />
          <Info>
          392 John Street
             Burlington, ON  L7R 2K4
          </Info>
        </Box>
        <Box>
        <Icon src={phone} />
          <Info>
              <Bold>
              Burlington
              </Bold>
              <Regular>
              Phone: 289 635 2050 <br/> 
              Fax: 289 635 2050
              </Regular>
              <Bold>
              Toronto
              </Bold>
              <Regular>
              Phone: 647 847 1230
              </Regular>
          </Info>
        </Box>
        <Box>
        <Icon src={email} />
          <Info className='emails' href = "mailto: info@progresspm.ca" >
          info@progresspm.ca
          </Info>
        </Box>
        
     </Left>
     <Right>
      <Map></Map>
     </Right>

    </Outer>
  )
}

export default Contact

const Outer = styled.div`
  padding-left: 6.5vw;
   padding-right: 6.5vw;
   padding-top: 50px;
   display: flex;
   gap: 50px;
   padding-bottom: 50px;
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
  gap: 20px;
  flex: 1;
`
const Right = styled.div`
display: flex;
  flex: 2;

  @media only screen and (max-width: 600px) {
        display: none;
    
  }
`
const Map = styled.div`
    background-image: url(${map}); 
    background-color: #cccccc; 
    background-position: center; 
    height: 100%;
    width: 100%;
    background-repeat: no-repeat; 
    background-size: cover; 
  
`


const Title = styled.h1`
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 24px;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  
  .emails:hover{
        text-decoration: underline;
    }
`
const Icon = styled.img`
  
`
const Info = styled.a`
   font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 18px;

    
`
const Bold = styled.h3`
  font-family: ${({ theme }) => theme.main.fontFamily.med};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 18px;
    padding-bottom: 5px;
`
const Regular = styled.h3`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: ${({ theme }) => theme.main.fonts.primary};
    font-size: 18px;
    padding-bottom: 15px;
    line-height: 25px;
`
