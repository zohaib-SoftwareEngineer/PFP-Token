import React from "react";
import {
  ServicesContainer,
  Heading,
  Welcome,
  DirectionFlex,
  // Welcomeimg,
  SubtitleSpan,
  RoadmapDiv,
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
    <ServicesContainer id="Roadmap">
      <Welcome>
       
        <DirectionFlex>
          <Heading>Roadmap</Heading>
          <SubtitleSpan>
          Our Project Plan will make it success.
          </SubtitleSpan>
        </DirectionFlex>
        </Welcome>
        <RoadmapDiv>
          <Roadmap/>
        </RoadmapDiv>
    </ServicesContainer>
  );
};

export default Services;
