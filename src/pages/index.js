import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
// import Welcome from "../components/Welcomesection";
// import WelcomeRemainings from "../components/Welcomesection2"
// import Road from '../components/Road';
// import Road1 from "../components/Road1";
// import FAQ from '../components/Faqs/index';
// import Services from '../components/Services';
// import Footer1 from '../components/Footer1';

// <Welcome />
// <WelcomeRemainings />
// <Road />
// <Road1 />
// <FAQ />
// <Services />
// <Footer1 />
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div></div>
      <HeroSection />
    </div>
  );
}

export default Home;
