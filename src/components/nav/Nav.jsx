import React, { useEffect, useState, useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function DropdownMenu({ label, items, onItemClick }) {
  const [open, setOpen] = useState(false);
  const leaveTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const handleItemClick = (item) => {
    setOpen(false);
    onItemClick?.(item);
  };

  return (
    <DesktopDropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownTrigger>{label} <ExpandMoreIcon fontSize="small" style={{marginLeft: '4px'}} /></DropdownTrigger>
      {open && (
        <DropdownContent>
          {items.map((item, idx) => (
            <DropdownItemWrapper key={idx}>
              {item.link ? (
                <DropdownItemLink as={Link} to={item.link}>
                  {item.label}
                </DropdownItemLink>
              ) : item.href ? (
                <DropdownItem as="a" href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => handleItemClick(item)}>
                  {item.label}
                </DropdownItem>
              )}
            </DropdownItemWrapper>
          ))}
        </DropdownContent>
      )}
    </DesktopDropdown>
  );
}

function DropdownMenuMobile({ label, items, onItemClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <MobileDropdownContainer>
      <MobileDropdownTrigger onClick={() => setMobileOpen(!mobileOpen)}>
        {label} <ExpandMoreIcon fontSize="small" style={{marginLeft: '4px', transform: mobileOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}} />
      </MobileDropdownTrigger>
      {mobileOpen && (
        <MobileDropdownContent>
          {items.map((item, idx) => (
            <div key={idx}>
              {item.link ? (
                <MobileDropdownItemLink as={Link} to={item.link} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </MobileDropdownItemLink>
              ) : item.href ? (
                <MobileDropdownItem as="a" href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </MobileDropdownItem>
              ) : (
                <MobileDropdownItem onClick={() => { setMobileOpen(false); onItemClick?.(item); }}>
                  {item.label}
                </MobileDropdownItem>
              )}
            </div>
          ))}
        </MobileDropdownContent>
      )}
    </MobileDropdownContainer>
  );
}

function DrawerAppBar(props) {
  const { window: windowProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const target = windowProp ? windowProp() : (typeof window !== 'undefined' ? window : undefined);
    if (!target) return undefined;

    const handleScroll = () => setColor(target.scrollY > 24);
    handleScroll();
    target.addEventListener('scroll', handleScroll);
    return () => target.removeEventListener('scroll', handleScroll);
  }, [windowProp]);

  useEffect(() => {
    // Close drawer when location changes
    setMobileOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={(e) => {
      // Only close drawer when clicking directly on the Box, not on children
      if (e.target === e.currentTarget) {
        handleDrawerToggle();
      }
    }} sx={{ textAlign: 'center' }}>
      <TexterMobile href='/'>
      <img style={{marginTop: 17}} src={logo} alt='logo' height={35}/>
      </TexterMobile>
      <Divider sx={{ m: 2}} />
      <List>
        
          <ListItem disablePadding>
           
              <ButtonDrawer>
                <DropdownMenuMobile
                  label="About"
                  items={[
                    { label: "Careers", link: "/meet-the-team#opportunities" },
                    { label: "Meet the Team", link: "/meet-the-team" }
                  ]}
                />
                <DropdownMenuMobile
                  label="Services"
                  items={[
                    { label: "Condominium Management Services", link: "/management" },
                    { label: "Developer Services", link: "/developer" }
                  ]}
                />
                <DropdownMenuMobile
                  label="Resources"
                  items={[
                    { label: "Resident login", href: 'https://app.condocontrol.com/login' },
                    { label: "Status Certificate", href: 'https://app.condocontrol.com/status-certificates/begin-order' },
                    { label: "Vendor Portal", href: 'https://app.vendorpm.com/signup' },
                    { label: "CMRAO", href: 'https://www.cmrao.ca/'},
                    { label: "CAO", href: 'https://www.condoauthorityontario.ca/' }
                  ]}
                />
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
            <Toolbar
              sx={{
                width: '100%',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                pl: { xs: '10px', sm: 0 },
                pr: { xs: 1, sm: 0 },
              }}
            >
              <IconButton
                color='inherit'
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                
                sx={{
                  mr: 2,
                  display: { sm: 'none' },
                  '& .MuiSvgIcon-root': { fontSize: '3rem' },
                }}
              >
                <MenuIcon fontSize="large"/>
              </IconButton>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <TotalNav>
                  <Home href="/">
                    <Logo src={logo} />
                  </Home>
                  <NavCenter>
                    <DropdownMenu
                      label="About"
                      items={[
                        { label: "Meet the Team", link: "/meet-the-team" },
                        { label: "Careers", link: "/meet-the-team#opportunities" }
                      ]}
                    />
                    <DropdownMenu
                      label="Services"
                      items={[
                        { label: "Condominium Management Services", link: "/management" },
                        { label: "Developer Services", link: "/developer" }
                      ]}
                    />
                    <DropdownMenu
                      label="Resources"
                      items={[
                        { label: "Resident login", href: 'https://app.condocontrol.com/login' },
                        { label: "Status Certificate", href: 'https://app.condocontrol.com/status-certificates/begin-order' },
                        { label: "Vendor Portal", href: 'https://app.vendorpm.com/signup' },
                        { label: "CMRAO", href: 'https://cmrao.com/' },
                        { label: "Condo Act Forms", href: 'https://www.condoauthorityontario.ca/' }
                      ]}
                    />
                  </NavCenter>
                  
                  
                    <SpecialButton as={Link} className='contactlink' to='/contact#contact'>
                      Contact Us
                      <ArrowForwardIcon fontSize="medium" />
                    </SpecialButton>
                  
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
  width: min(1100px, 95vw);
  gap: 40px;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 12px;
  }
`

const Home = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`

const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
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

const TextsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  height: fit-content;
  flex: 0 0 auto;
  flex-wrap: wrap;

  .contactlink {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
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
  height: 60px;
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
  padding: 0 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
  height: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.main.highlightSoft};
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled.a`
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.nav.border};
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.main.highlight};
    color: ${({ theme }) => theme.main.highlight};
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

const DesktopDropdown = styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 8px;

  &:hover {
    padding-bottom: 0;
  }
`

const DropdownTrigger = styled.div`
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
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.nav.fonts.primary};
    border-color: ${({ theme }) => theme.nav.border};
    background: rgba(255, 255, 255, 0.05);
  }
`

const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background-color: rgba(15, 19, 26, 0.98);
  border: 1px solid ${({ theme }) => theme.nav.border};
  border-radius: 8px;
  min-width: 250px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

const DropdownItemWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;

  &:first-child a,
  &:first-child div {
    border-radius: 7px 7px 0 0;
  }

  &:last-child a,
  &:last-child div {
    border-radius: 0 0 7px 7px;
  }
`

const DropdownItem = styled.div`
  padding: 12px 20px;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  flex: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.main.highlight};
  }
`

const DropdownItemLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  flex: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.main.highlight};
  }
`

const MobileDropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MobileDropdownTrigger = styled.div`
  padding: 12px;
  color: ${({ theme }) => theme.nav.fonts.primary};
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.main.highlight};
  }
`

const MobileDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.05);
  border-top: 1px solid ${({ theme }) => theme.nav.border};
  border-bottom: 1px solid ${({ theme }) => theme.nav.border};
  width: 100%;
  box-sizing: border-box;

  > div {
    width: 100%;
  }
`

const MobileDropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  color: ${({ theme }) => theme.nav.fonts.high};
  font-size: 1.1rem;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.main.highlight};
  }
`

const MobileDropdownItemLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: ${({ theme }) => theme.nav.fonts.high};
  font-size: 1.1rem;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.main.highlight};
  }
`
