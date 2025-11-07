import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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

function DrawerAppBar(props) {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const target = windowProp ? windowProp() : (typeof window !== 'undefined' ? window : undefined);
    if (!target) return undefined;

    const handleScroll = () => setColor(target.scrollY > 24);
    handleScroll();
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, [windowProp]);

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
                    Resident Registration
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile href='https://app.condocontrol.com/login' target="_blank">
                    Resident Login
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile as={Link} to="/#Community">
                    Communities
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile as={Link} to="/#About">
                    About
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile href='https://app.condocontrol.com/status-certificates/begin-order' target="_blank">
                    Status Certificate
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile href='https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request' target="_blank">
                    Service Request
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile href='https://app.vendorpm.com/signup' target="_blank">
                    Contractors
                  </TexterMobile>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <TexterMobile as={Link} to='/contact#contact'>
                    Contact
                  </TexterMobile>
                </ListItemButton>
              </ButtonDrawer>
            
          </ListItem>
      
      </List>
    </Box>
  );

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined;


  return (
    <React.Fragment>
    <CssBaseline  />
    <HideOnScroll {...props}>
      
      <AppBar style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <div sx={{ display: 'flex' }}>
          <Outer className={color ? "filled" : "empty"}>
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
                   {/*<Texter href='https://app.condocontrol.com/registration' target="_blank">
                      Resident Registration
                    </Texter>*/}
                    <Texter href='https://app.condocontrol.com/login' target="_blank">
                      Resident Login
                    </Texter>
                    <Texter as={Link} to="/#Service">
                      Services
                    </Texter>
                    <Texter as={Link} to="/#About">
                      About
                    </Texter>
                  </TextsLeft>
                      <Home href="/">
                      <Logo src={logo} />
                      </Home>
                      <TextsRight>
                        <Texter href='https://app.condocontrol.com/status-certificates/begin-order' target="_blank">
                          Status Certificate
                        </Texter>
                        {/*<Texter href='https://app.condocontrol.com/login?NextPage=%2fservicerequest%2fadd-new-service-request' target="_blank">
                          Service Request
                        </Texter>*/}
                        {/*<Texter href='https://app.vendorpm.com/signup' target="_blank">
                          Contractors
                        </Texter>*/}
                        <SpecialButton as={Link} className='contactlink' to='/contact#contact'>
                          Request a Proposal
                          <ArrowForwardIcon fontSize="medium" />
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
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  backgroundColor: '#151a21',
                  color: '#F5F7FB',
                },
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
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(22px);

  &.filled {
    background-color: rgba(15, 19, 26, 0.95);
    border-color: ${({ theme }) => theme.nav.border};
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
  }

  &.empty {
    background-color: rgba(11, 13, 18, 0.12);
  }

  @media (max-width: 960px) {
    padding: 6px 0;
  }
`



const TotalNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1200px, 92vw);

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 12px;
  }
`
const TextsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex: 1;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`

const Home = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-align: center;
  gap: 12px;
  height: fit-content;
  align-items: center;
  flex-wrap: wrap;

  .contactlink {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
  }
`

const Texter = styled.a`
  color: ${({ theme }) => theme.nav.fonts.high};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  padding: 10px 14px;
  display: inline-flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.nav.fonts.primary};
    border-color: ${({ theme }) => theme.nav.border};
    background: rgba(255, 255, 255, 0.05);
  }
`


const Logo = styled.img`
  height: 44px;
  width: auto;
  flex:0 0 auto;
  padding: 0 10px;

  @media only screen and (max-width: 1250px) {
    height: 36px;
  }
`
const SpecialButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 26px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  height: 48px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`


const ButtonDrawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  align-items: center;
`
const TexterMobile = styled.a`
  padding: 12px;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-flex;
  justify-content: center;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.main.highlight};
  }
`
