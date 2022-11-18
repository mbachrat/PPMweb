import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
// import {Route, Routes} from "react-router-dom"
import { lightTheme } from './styles/theme.jsx';
import './App.css';
import React from 'react';
import DrawerAppBar from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Card from './components/extras/Card';
import About from './components/about/About';
import Services from './components/services/Services';
import CardTwo from './components/extras/CardTwo';
import Communities from './components/communities/Communities';


function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <DrawerAppBar />
    <Hero />
    <About />    
    <Services />
    <Communities />
  </ThemeProvider>
);
}

export default App;

