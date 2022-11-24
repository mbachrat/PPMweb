import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Divider } from '@mui/material';


const EmailContactForm = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    // e.preventDefault(); // prevents the page from reloading when you hit “Send”
    alert('You have submitted the form.')
  
    emailjs.sendForm('service_euqd5la', 'template_0sktxli', form.current, 'iz74TaBnur3LUJi4X')
      .then((result) => {
          // show the user a success message
      }, (error) => {
          // show the user an error
      });
  };
  return (
    <Outer>
     <Seperate></Seperate>
        <Title id="form">
        
            Request for Proposal
        </Title>
    
    <Form ref={form} onSubmit={sendEmail}>
    <Label>Name</Label>
      <Name>
      <Input type="text" name="from_name" placeholder="First" required/>
      <Input type="text" name="from_last" placeholder="Last" required/>
      </Name>
      <Label>Board Position</Label>
      <Input type="text" name="board_position" required/>
      <Label>Address</Label>
      <Input type="text" name="from_address" placeholder="Street Address" required/>
      <Input type="text" name="from_addresstwo" placeholder="Address Line 2" required/>
      <Address>
      <Input type="text" name="from_city" placeholder="City" required/>
      <Input type="text" name="from_postal" placeholder="Postal Code" required/>
      </Address>
      <Label>Phone</Label>
      <Input type="tel" name="from_phone" required/>
      <Label>Email</Label>
      <Input type="email" name="from_email" required />
      <Subtitle>
        Property Information
        <Divider />
      </Subtitle>
      <Label>Condominuim Corporation</Label>
      <Input type="text" name="condo_corp" required/>
      <Label>Building Structure</Label>
      <Select name="building_structure" required>
        <option disabled selected value="" >-- select an option --</option>
        <option name="building_structure">Lowrise</option>
        <option name="building_structure">Townhouse</option>
        <option name="building_structure">Detached</option>
        <option name="building_structure">Shared Facility</option>
      </Select>
      <Label>Building Type</Label>
      <Select name="building_type" required>
      <option disabled selected value="">-- select an option --</option>
        <option value="building_type">Residential</option>
        <option value="building_type">Commercial</option>
        <option value="building_type">Mixed (both)</option>
        
 
 

      </Select>
      <Label>Number of Units</Label>
      <Input type="number" name="number_units" required/>
      <Label>Building Address (If different from contact address)</Label>
      <Input type="text" name="building_address" placeholder="Street Address" />
      <Input type="text" name="building_addresstwo" placeholder="Address Line 2"/>
      <Address>
      <Input type="text" name="building_city"placeholder="City"/>
      <Input type="text" name="building_postal" placeholder="Postal Code"/>
      </Address>
      <Submit type="submit" value="Submit" />
    </Form>
    </Outer>
  );
 };
  
 export default EmailContactForm;

 const Outer = styled.div`
  padding-left: 6.5vw;
   padding-right: 6.5vw;
   display: flex;
   flex-direction: column;
   align-items: center;
 `
 const Label = styled.div`
    font-size: 25px;
    margin-bottom: -20px; 
 `
 const Form = styled.form`
  display: flex;
  width: 50vw;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 960px) {
     width: 100%;
}

 `


 const Title = styled.h1`
 font-size: 50px;
 font-family: ${({ theme }) => theme.main.fontFamily.bold};
 background: -webkit-linear-gradient(45deg,#0699CD, #152E66);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 60px;
margin-top: 60px;

 @media only screen and (max-width: 960px) {
     margin-bottom: 50px;
     font-size: 40px;
}
`

const Subtitle = styled.h2`
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 40px;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #eeeeee;

  &:invalid:focus {
      border: solid 2px red;
  }
`
 


const Address = styled.div`
  display: flex;
  gap: 20px;
`
const Name = styled.div`
  display: flex;
  gap: 20px;
`
const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #eeeeee;
  border: none;

  &:invalid:focus {
      border: solid 2px red;
  }
`
const Submit = styled.input`
  width: 100%;
  margin-top: 30px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.main.fonts.third};
  margin-bottom: 50px;
  border: none;

  &:active {
    background-color: ${({ theme }) => theme.main.fonts.primary};
  }
`

const Seperate = styled.div`
  border-top: solid 1px #b8b8b8;
  width: 100%;

`

// type="submit" value="Submit"