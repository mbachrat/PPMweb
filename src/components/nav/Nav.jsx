import React from 'react'
import styled from 'styled-components'

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
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';




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

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function HideAppBar(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
        
//       </HideOnScroll>
     
//     </React.Fragment>
//   );
// }








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
      <img src={logo} alt='logo' height={45}/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
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
           <Texts>
              <Texter>
                Home
              </Texter>
              <Texter>
                    About
              </Texter>
              <Texter>
                  Contact
              </Texter>
           </Texts>
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
  display: flex;
  position: sticky;
  background-color: ${({ theme }) => theme.nav.fonts.primary};
`



const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid;
`

const Texter = styled.a`
color: ${({ theme }) => theme.nav.fonts.hover};
`






// function Nav() {
//   return (
//     <Outer>
//       <Buttons>
//         <Buttonin>
          
//         </Buttonin>
//         <Buttonin>

//         </Buttonin>
//         <Buttonin>

//         </Buttonin>
//         <Buttonin>

//         </Buttonin>
//         <Logo>

//         </Logo>
//         <Buttonin>

//         </Buttonin>
//         <Buttonin>

//         </Buttonin>
//         <Buttonin>

//         </Buttonin>
//         <Contact>

//         </Contact>
//       </Buttons>

//     </Outer>
//   )
// }

// export default Nav



// const Outer = styled.div`
  

// `
// const Buttons = styled.div`
  

// `
// const Buttonin = styled.button`
  

// `
// const Contact = styled.button`
  

// `
// const Logo = styled.img`
  

// `