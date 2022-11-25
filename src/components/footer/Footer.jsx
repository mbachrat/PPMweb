import { Divider } from '@mui/material';
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'
import logo from "../../assets/img/ppmlogo.png"
import fb from "../../assets/symbols/logo-facebook-svgrepo-com.svg"




function Footer() {

    let residence = [
        {name:"Resident Registration",link:"https://app.condocontrol.com/registration"},
        {name:"Resident Login",link:"https://app.condocontrol.com/login"},
        {name:"Resources", link:"https://www.condoauthorityontario.ca/resources/"},
        
        
    ];
    let residenceList = residence.map(residence => <a className='Test' style={{color: "#f6f6f6", fontSize: "14px"}} href ={residence.link} target="blank">{residence.name}</a>)

    let content = [
        {name:"Status Certificate",link:"https://app.condocontrol.com/status-certificates/begin-order"},
        {name:"Service Request",link:"https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request"},
        {name:"Contractors", link:"https://app.vendorpm.com/signup"},
        
    ];
    let contentList = content.map(content => <a className='Test' style={{color: "#f6f6f6", fontSize: "14px"}} href ={content.link}>{content.name}</a>)

    let company = [
        {name:"About",link:"/#About"},
        {name:"Community", link:"/#Community"},
        {name:"Contact",link:"/contact#contact"},
        {name:"Request for Proposal", link:"/contact#form"},
        
    ];
    let companyList = company.map(company => <Link className='Test' style={{color: "#f6f6f6", fontSize: "14px"}} to ={company.link}>{company.name}</Link>)



  return (
    <Outer>
        <Top>
            <Logo>
                <Image src={logo} width={250}/>
                <Address>
                392 John Street Burlington, ON  L7R 2K4
                </Address>
                <Email>
                info@progresspm.ca
                </Email>
            </Logo>
            <TotalText>
                <Residence>
                    <Title>
                        RESIDENCE
                    </Title>
                    <Links >
                        {residenceList}
                    </Links>
                </Residence>
                <Residence>
                    <Title>
                        CONTENT
                    </Title>
                    <Links>
                        {contentList}
                    </Links>
                </Residence>
                <Residence>
                    <Title>
                        COMPANY
                    </Title>
                    <Links>
                        {companyList}
                    </Links>
                </Residence>
            </TotalText>
        </Top>
        <Divider  sx={{ bgcolor: "white", opacity: 0.1, margin: "10px" }}/>
        <Bottom>
            <Left>
            Progress Property Managment Ltd 2022
            </Left>
            <Right href="https://www.facebook.com/Progresspm/">
                <Socials src={fb} />
            </Right>
        </Bottom>
    </Outer>
  )
}

export default Footer

const Outer = styled.div`
 background: #0d0d0d;
    padding-left: 6.5vw;
   padding-right: 6.5vw;
`
const Top = styled.div`
    display: flex;
    padding-top: 70px;

    @media only screen and (max-width: 960px) {
        flex-direction: column;
    }
`
const Logo = styled.div`
    flex: 2.5;
`
const Image = styled.img`
    filter: invert(1) brightness(100);
   
`
const Address = styled.div`
    font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: white;
    font-size: 12px;
    padding-top: 5px;
`

const TotalText = styled.div`
    flex: 2.5;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 960px) {
        flex-direction: column;
        
    }
`

const Residence = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 30px;
   padding-bottom: 100px ;
   @media only screen and (max-width: 960px) {
        padding-bottom: 30px;
        border-bottom: solid grey 1px;
    }
    
`
const Title = styled.div`
     font-family: ${({ theme }) => theme.main.fontFamily.bold};
     color: white;
    font-size: 14px;
    padding-bottom: 30px;
`
const Links = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 25px;

    .Test:hover{
        
        text-decoration: underline;
    }
   
    
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Left = styled.p`
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: #bbbbbb;
    font-size: 10px;
`
const Right = styled.a`
    
`
const Socials = styled.img`
    filter: invert(1);
`
const Email = styled.div`
padding-top: 3px;
     font-family: ${({ theme }) => theme.main.fontFamily.light};
     color: white;
    font-size: 12px;
`

