import React from "react";
import {
  ServicesContainer,
  Heading,
  Welcome,
  DirectionFlex,
  Welcomeimg,
  SubtitleSpan,
  Imagediv,
  SubtitleSpan2,
  // SocialMedia,
  // NavBtnDiscord,
  // NavBtntwitter,
  // Headingdiv,
  // Headingmain,
  // Mintingspan2,
  
} from "./WelcomeElements";
import T4 from "../../images/pfpgif.gif";
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";
// eslint-disable-next-line
import ImageSlider from "../Animations/imageSlider";

const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
       
        <DirectionFlex>
          <Heading>About PFP  Crypto</Heading>
          <SubtitleSpan>
          PFP three letters to bring together the entire Muslim community around the first coin respecting Islamic laws.
          </SubtitleSpan>
          <SubtitleSpan2>
          PFP is a coin that generates Zakat. During each Lunar New Year, 2.5% of the shares held by the NGO will be donated to support UNRWA USA. Through UNRWA USA, we will support the following causes: education, medical care, and food.
          </SubtitleSpan2>
        </DirectionFlex>
        <Imagediv>
        <Welcomeimg src={T4} alt="loading" />
      </Imagediv>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
