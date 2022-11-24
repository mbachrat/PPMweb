import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/img/ppmlogo.png'

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


//HIDE FUNCTION

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Mobile pop out

const drawerWidth = 240;
const navItems = ['Resident Registration', 'Communities', 'About', 'Status Certificate', 'Status Request', 'Contractors', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <TexterMobile href='/'>
      <img style={{marginTop: 17}} src={logo} alt='logo' height={35}/>
      </TexterMobile>
      <Divider sx={{ m: 2}} />
      <List>
        
          <ListItem disablePadding>
           
              <ButtonDrawer>
              <ListItemButton sx={{ textAlign: 'center' }}>
            <TexterMobile href='https://app.condocontrol.com/registration' target="_blank">
                              Resident<br/> Registration
                        </TexterMobile>
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                        <TexterMobile href='https://app.condocontrol.com/login' target="_blank">
                              Resident<br/> Login
                        </TexterMobile>
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link to="/#Community" style={{padding: 10}}> 
                            Communities
                        </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link to="/#About" style={{padding: 10}}> 
                            About
                        </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                          <TexterMobile href='https://app.condocontrol.com/status-certificates/begin-order' target="_blank">
                                Status<br/> Certificate
                          </TexterMobile>
                          </ListItemButton>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                          <TexterMobile href='https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request' target="_blank">
                                Service<br/> Request
                          </TexterMobile>
                          </ListItemButton>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                          <TexterMobile href='https://app.vendorpm.com/signup' target="_blank">
                              Contractors
                          </TexterMobile>
                          </ListItemButton>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                            <TexterMobile href='/contact'>
                                Contact
                                
                              </TexterMobile>
                              </ListItemButton>
                              </ButtonDrawer>
            
          </ListItem>
      
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
      
      <AppBar>
        <div sx={{ display: 'flex' }}>
          <Outer >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon fontSize="large"/>
              </IconButton>
              
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <TotalNav>
                  <TextsLeft>
                        <Texter href='https://app.condocontrol.com/registration' target="_blank">
                              Resident<br/> Registration
                        </Texter>
                        <Texter href='https://app.condocontrol.com/login' target="_blank">
                              Resident<br/> Login
                        </Texter>
                        <Link to="/#Community" style={{marginTop: 5}}>
                        <Texter >
                            Communities
                        </Texter>
                        </Link>
                        <Link to="/#About" style={{marginTop: 5}}>
                        <Texter >
                            About
                        </Texter>
                        </Link>
                      </TextsLeft>
                      <Home href="/">
                      <Logo src={logo} />
                      </Home>
                      <TextsRight>
                          <Texter href='https://app.condocontrol.com/status-certificates/begin-order' target="_blank">
                                Status<br/> Certificate
                          </Texter>
                          <Texter href='https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request' target="_blank">
                                Service<br/> Request
                          </Texter>
                          <Texter href='https://app.vendorpm.com/signup' target="_blank">
                              Contractors
                          </Texter>
                          
                            <SpecialButton href='/contact'>
                                Contact
                                <ArrowForwardIcon fontSize="large"/>
                              </SpecialButton>
                          
                      </TextsRight>
                    </TotalNav>
                </Box>
              </Toolbar>
            </Outer>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </div>
      </AppBar>
    </HideOnScroll>
   
  </React.Fragment>
  );
}



export default DrawerAppBar;


const Outer = styled.div`
  background-color: ${({ theme }) => theme.nav.background};
  display: flex;
  height: 100px;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    height: 200px;
    justify-content:start;
  }
  
  @media only screen and (max-width: 599px) {
    height: 60px;
    justify-content:start;
  }

  
  
`



const TotalNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87vw;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }

`
const TextsLeft = styled.div`
  display: flex;
  justify-content: space-between;
 width: 100%;
 text-align: center;

`

const Home = styled.a`

`

const TextsRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  
  height: fit-content;
`

const Texter = styled.a`
color: ${({ theme }) => theme.nav.fonts.high};
font-family: ${({ theme }) => theme.main.fontFamily.primary};
/* font-weight: 600; */
padding: 20px;
display: flex;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

     
     
     transition: color 0.3s;
    &:hover {
        color: ${({ theme }) => theme.nav.fonts.primary};
        /* text-shadow: 0 0 5px ${({ theme }) => theme.nav.fonts.hover}; */
        /* text-decoration: underline 2px; */
    }

`


const Logo = styled.img`
height: 40px;
padding-left: 20px;
padding-right: 20px;

@media only screen and (max-width: 1250px) {
    display: none;
  }

`
const SpecialButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
padding: 10px;
padding-top: 12px;
border-radius: 7px;
background-color: ${({ theme }) => theme.main.fonts.third};
color: ${({ theme }) => theme.nav.background};
height: 45px;
margin-top: 30px;
margin-bottom: 30px;
cursor: pointer;

transition: background-color 0.5s;
    &:hover {
        background-color: ${({ theme }) => theme.main.fonts.primary};
        text-shadow: 0 0 10px ${({ theme }) => theme.nav.fonts.hover};
    }
`


const ButtonDrawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  align-items: center;
`
const TexterMobile = styled.a`
  padding: 10px;


`



