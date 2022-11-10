import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import {Route, Routes} from "react-router-dom"
import { lightTheme } from './styles/theme.jsx';
import './App.css';
import React from 'react';
import Nav from './components/nav/Nav';

function App() {
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Nav />
  </ThemeProvider>
);
}

export default App;
