import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
// import {Route, Routes} from "react-router-dom"
import { lightTheme } from './styles/theme.jsx';
import './App.css';
import React from 'react';
import DrawerAppBar from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Communities from './components/communities/Communities';
import Footer from './components/footer/Footer';


function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <DrawerAppBar />
    <Hero />
    <About />    
    <Services />
    <Communities />
    <Footer />
  </ThemeProvider>
);
}

export default App;

