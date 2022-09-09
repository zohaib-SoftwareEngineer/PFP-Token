import React from "react";
import {
  ServicesContainer,
  Heading,
  Welcome,
  DirectionFlex,
  // Welcomeimg,
  SubtitleSpan,
  // Imagediv,
  // SubtitleSpan2,
  // Mintingspan2,
  
} from "./WelcomeElements";
import Roadmap from "../Animations/Roadmap";
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";


const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
       
        <DirectionFlex>
          <Heading>Roadmap</Heading>
          <SubtitleSpan>
          Our Project Plan will make it success.
          </SubtitleSpan>
          
        </DirectionFlex>
      </Welcome>
      <Roadmap/>
    </ServicesContainer>
  );
};

export default Services;
