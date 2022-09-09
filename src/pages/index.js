import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Welcome from "../components/AboutPFP";
import OverView from "../components/OverView";
import Intro from "../components/Introduction";
import Invest from "../components/WhyInvest";
import TokenEconomics from "../components/TokenEconomics";
import FAQs from "../components/Faqs";
import Roadmap from "../components/RoadmapFinal";
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
      <HeroSection/>
      <Welcome/>
      <OverView/>
      <Intro/>
      <Invest/>
      <TokenEconomics/>
      <Roadmap/>
      <FAQs/>
      
    </div>
  );
}

export default Home;
