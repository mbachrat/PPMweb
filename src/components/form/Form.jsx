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
    <Label>Name*</Label>
      <Name>
      <Input type="text" name="from_name" onChange={event => setFirstName(event.target.value)} value={firstName} placeholder="First" required/>
      <Input type="text" name="from_last" onChange={event => setLastName(event.target.value)} value={lastName} placeholder="Last" required/>
      </Name>
      <Label>Board Position</Label>
      <Input type="text" name="board_position" onChange={event => setBoardposition(event.target.value)} value={boardposition}/>
      <Label>Address*</Label>
      <Input type="text" name="from_address" onChange={event => setStreetaddress(event.target.value)} value={streetaddress} placeholder="Street Address" required/>
      <Input type="text" name="from_addresstwo" onChange={event => setLinetwo(event.target.value)} value={linetwo} placeholder="Address Line 2" required/>
      <Address>
      <Input type="text" name="from_city" onChange={event => setCity(event.target.value)} value={city} placeholder="City" required/>
      <Input type="text" name="postal_code" onChange={event => setPostalcode(event.target.value)} value={postalcode} placeholder="Postal Code" required/>
      </Address>
      <Label>Phone*</Label>
      <Input type="tel" name="from_phone" onChange={event => setPhone(event.target.value)} value={phone} required/>
      <Label>Email*</Label>
      <Input type="email" name="from_email" onChange={event => setEmail(event.target.value)} value={email} required />
      <Subtitle>
        Property Information
        <Divider />
      </Subtitle>
      <Label>Condominuim Corporation</Label>
      <Input type="text" name="condo_corp" onChange={event => setCondocorp(event.target.value)} value={condocorp}/>
      <Label>Building Structure*</Label>
      <Select name="building_structure" onChange={event => setBuildingstructure(event.target.value)} value={buildingstructure} required>
        <option disabled selected value="" >-- select an option --</option>
        <option name="building_structure">Lowrise</option>
        <option name="building_structure">Townhouse</option>
        <option name="building_structure">Detached</option>
        <option name="building_structure">Shared Facility</option>
      </Select>
      <Label>Building Type*</Label>
      <Select name="building_type" onChange={event => setBuildingtype(event.target.value)} value={buildingtype} required>
      <option disabled selected value="">-- select an option --</option>
        <option name="building_type">Residential</option>
        <option name="building_type">Commercial</option>
        <option name="building_type">Mixed (both)</option>
        
 
 

      </Select>
      <Label>Number of Units</Label>
      <Input type="number" name="number_units" onChange={event => setUnits(event.target.value)} value={units}/>
      <Label>Building Address* (If different from contact address)</Label>
      <Input type="text" name="building_address" onChange={event => setBuildingaddress(event.target.value)} value={buildingaddress} placeholder="Street Address"/>
      <Input type="text" name="building_addresstwo" onChange={event => setBuildingline(event.target.value)} value={buildingline} placeholder="Address Line 2"/>
      <Address>
      <Input type="text" name="building_city" onChange={event => setBuildingcity(event.target.value)} value={buildingcity} placeholder="City"/>
      <Input type="text" name="building_postal" onChange={event => setBuildingcode(event.target.value)} value={buildingcode} placeholder="Postal Code"/>
      </Address>
      <Submit type="submit">Submit</Submit>
    </Form>
    </Outer>
  );
 };
  
 export default EmailContactForm;

 const Outer = styled.div`
  padding: 80px 6.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(11, 13, 18, 0.5), rgba(21, 26, 33, 0.8));
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};

  @media only screen and (max-width: 960px) {
    padding: 60px 6.5vw;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.main.fonts.primary};
  text-transform: uppercase;
  margin-top: 8px;
  display: block;
`;

const Form = styled.form`
  display: flex;
  width: min(600px, 90vw);
  flex-direction: column;
  gap: 24px;

  @media only screen and (max-width: 960px) {
    width: 100%;
    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.main.fonts.primary};
  margin: 0 0 60px 0;
  text-align: center;

  @media only screen and (max-width: 960px) {
    margin-bottom: 40px;
    font-size: clamp(2rem, 4vw, 3rem);
  }
`;

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.main.highlight};
  padding: 40px 0 20px 0;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.nav.border};
  background-color: ${({ theme }) => theme.main.elevated};
  color: ${({ theme }) => theme.main.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.main.fonts.muted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.main.highlight};
    background-color: rgba(245, 247, 251, 0.05);
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
  }

  &:invalid:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
`;

const Address = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Name = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.nav.border};
  background-color: ${({ theme }) => theme.main.elevated};
  color: ${({ theme }) => theme.main.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.main.highlight};
    background-color: rgba(245, 247, 251, 0.05);
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
  }

  &:invalid:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  option {
    background-color: ${({ theme }) => theme.main.bg};
    color: ${({ theme }) => theme.main.fonts.primary};
  }
`;

const Submit = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  color: #0b0d12;
  background-color: ${({ theme }) => theme.main.highlight};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${({ theme }) => theme.main.fontFamily.med};

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 193, 7, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 960px) {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const Seperate = styled.div`
  display: none;
`;