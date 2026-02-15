import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Communities from '../components/communities/Communities';

const HomePage = () => (
  <>
    <Hero />
    <About />
    {/* <Services /> */}
    <Communities />
  </>
);

export default HomePage;
