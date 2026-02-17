import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import ServicesOverview from '../components/services/ServicesOverview';
import Communities from '../components/communities/Communities';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <ServicesOverview />
    <Communities />
  </>
);

export default HomePage;
