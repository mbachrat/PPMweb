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

function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <DrawerAppBar />
    <Hero />
    <About />    
  </ThemeProvider>
);
}

export default App;

