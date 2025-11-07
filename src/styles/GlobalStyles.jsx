import { createGlobalStyle } from 'styled-components';

// import cyrBold from '../assets/fonts/HelveticaNeu-Bold.ttf';
// import cyrMedium from '../assets/fonts/HelveticaNeu-Medium.ttf';
// import cyrLight from '../assets/fonts/HelveticaNeu-Light.ttf';
// import cyrHeavy from '../assets/fonts/HelveticaNeu-heavy.ttf';
// import cyrExtraLight from '../assets/fonts/HelveticaNeu-xlight.ttf';

import cyrBold from '../assets/fonts/HelveticaNeueCyr-Bold.woff';
import cyrMedium from '../assets/fonts/HelveticaNeueCyr-Medium.woff';
import cyrLight from '../assets/fonts/HelveticaNeueCyr-Light.woff';
import cyrRoman from '../assets/fonts/HelveticaNeueCyr-Roman.woff';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

.stop-scrolling {
  height: 100vh;
  overflow: hidden;
}
@font-face {
  font-family: 'cyrLight';
  src: url(${cyrLight}) format('woff');
}
@font-face {
  font-family: 'cyrBold';
  src: url(${cyrBold}) format('woff');
}
@font-face {
  font-family: 'cyrMed';
  src: url(${cyrMedium}) format('woff');
}
@font-face {
  font-family: 'cyrRoman';
  src: url(${cyrRoman}) format('woff');
}

html {
  background-color: ${({ theme }) => theme.main.background};
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
  font-size: 62.5%;
}
body {
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.main.background};
  color: ${({ theme }) => theme.main.fonts.primary};
  z-index: -3;
  transition: background-color 0.5s ease-in-out, color 0.3s ease-in-out;
}
#root {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.main.background};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Space Grotesk', cyrRoman, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
p,
a,
div {
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.main.fonts.secondary};
}
h1,
h2,
h3,
h4,
h5 {
  font-size: 2rem;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  letter-spacing: -0.02em;
}
a {
  text-decoration: none;
}
input {
  padding: 12px 16px;
  background: ${({ theme }) => theme.main.card};
  border: 1px solid ${({ theme }) => theme.main.border};
  border-radius: 12px;
  height: 48px;
  width: 260px;
  color: ${({ theme }) => theme.main.fonts.primary};
}
input,
select,
textarea {
  text-align: left;
  font-size: 1.6rem;
}
textarea::placeholder,
input::placeholder {
  color: ${({ theme }) => theme.main.fonts.muted};
}
textarea:focus,
input:focus {
  outline: 2px solid ${({ theme }) => theme.main.highlight};
}
::selection {
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
}
::-moz-selection {
  background: ${({ theme }) => theme.main.highlight};
  color: #0b0d12;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.main.surface};
}
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.main.border};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.main.hover};
}
`;

export default GlobalStyles;
