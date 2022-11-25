import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Divider } from '@mui/material';


const EmailContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [boardposition, setBoardposition] = useState('');
  const [streetaddress, setStreetaddress] = useState('');
  const [linetwo, setLinetwo] = useState('');
  const [city, setCity] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [condocorp, setCondocorp] = useState('');
  const [buildingstructure, setBuildingstructure] = useState('');
  const [buildingtype, setBuildingtype] = useState('');
  const [units, setUnits] = useState('');
  const [buildingaddress, setBuildingaddress] = useState('');
  const [buildingline, setBuildingline] = useState('');
  const [buildingcity, setBuildingcity] = useState('');
  const [buildingcode, setBuildingcode] = useState('');
  const form = useRef();
  
  const sendEmail = (e) => {
     e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
  
    emailjs.sendForm('service_euqd5la', 'template_0sktxli', form.current, 'iz74TaBnur3LUJi4X')
      .then((result) => {
        alert('You have submitted the form.')
        setFirstName('');
        setLastName('');
        setBoardposition('');
        setStreetaddress('');
        setLinetwo('');
        setCity('');
        setPostalcode('');
        setPhone('');
        setEmail('');
        setCondocorp('');
        setBuildingstructure('');
        setBuildingtype('');
        setUnits('');
        setBuildingaddress('');
        setBuildingline('');
        setBuildingcity('');
        setBuildingcode('');

      }, (error) => {
        alert('There has been an Error. Try again')
      });
      

      // 👇️ clear all input values in the form
  

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
      <Input type="text" name="from_name" onChange={event => setFirstName(event.target.value)} value={firstName} placeholder="First" required/>
      <Input type="text" name="from_last" onChange={event => setLastName(event.target.value)} value={lastName} placeholder="Last" required/>
      </Name>
      <Label>Board Position</Label>
      <Input type="text" name="board_position" onChange={event => setBoardposition(event.target.value)} value={boardposition} required/>
      <Label>Address</Label>
      <Input type="text" name="from_address" onChange={event => setStreetaddress(event.target.value)} value={streetaddress} placeholder="Street Address" required/>
      <Input type="text" name="from_addresstwo" onChange={event => setLinetwo(event.target.value)} value={linetwo} placeholder="Address Line 2" required/>
      <Address>
      <Input type="text" name="from_city" onChange={event => setCity(event.target.value)} value={city} placeholder="City" required/>
      <Input type="text" name="postal_code" onChange={event => setPostalcode(event.target.value)} value={postalcode} placeholder="Postal Code" required/>
      </Address>
      <Label>Phone</Label>
      <Input type="tel" name="from_phone" onChange={event => setPhone(event.target.value)} value={phone} required/>
      <Label>Email</Label>
      <Input type="email" name="from_email" onChange={event => setEmail(event.target.value)} value={email} required />
      <Subtitle>
        Property Information
        <Divider />
      </Subtitle>
      <Label>Condominuim Corporation</Label>
      <Input type="text" name="condo_corp" onChange={event => setCondocorp(event.target.value)} value={condocorp} required/>
      <Label>Building Structure</Label>
      <Select name="building_structure" onChange={event => setBuildingstructure(event.target.value)} value={buildingstructure} required>
        <option disabled selected value="" >-- select an option --</option>
        <option name="building_structure">Lowrise</option>
        <option name="building_structure">Townhouse</option>
        <option name="building_structure">Detached</option>
        <option name="building_structure">Shared Facility</option>
      </Select>
      <Label>Building Type</Label>
      <Select name="building_type" onChange={event => setBuildingtype(event.target.value)} value={buildingtype} required>
      <option disabled selected value="">-- select an option --</option>
        <option name="building_type">Residential</option>
        <option name="building_type">Commercial</option>
        <option name="building_type">Mixed (both)</option>
        
 
 

      </Select>
      <Label>Number of Units</Label>
      <Input type="number" name="number_units" onChange={event => setUnits(event.target.value)} value={units} required/>
      <Label>Building Address (If different from contact address)</Label>
      <Input type="text" name="building_address" onChange={event => setBuildingaddress(event.target.value)} value={buildingaddress} placeholder="Street Address" />
      <Input type="text" name="building_addresstwo" onChange={event => setBuildingline(event.target.value)} value={buildingline} placeholder="Address Line 2"/>
      <Address>
      <Input type="text" name="building_city" onChange={event => setBuildingcity(event.target.value)} value={buildingcity} placeholder="City"/>
      <Input type="text" name="building_postal" onChange={event => setBuildingcode(event.target.value)} value={buildingcode} placeholder="Postal Code"/>
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