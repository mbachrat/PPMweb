import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { lightTheme } from '../styles/theme.jsx';
import DrawerAppBar from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

// Centralizes the shared chrome so routes can stay lean.
const BaseLayout = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <DrawerAppBar />
    {children}
    <Footer />
  </ThemeProvider>
);

export default BaseLayout;
