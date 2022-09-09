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
  
} from "./InvestElements";
import Prediction from "../../images/prediction.png";
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";


const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
        <DirectionFlex>
          <Heading>Why Invest In Our Pre-/ Private Sales?</Heading>
          <SubtitleSpan>
          The earlier you buy the currency, the greater the potential for profit.
          </SubtitleSpan>
          <SubtitleSpan2>
          The average return of the stock market is about 5%-10% per year, while in cryptocurrency, you can easily generate a return of more than 1000% per year.
          </SubtitleSpan2>
        </DirectionFlex>
        <Imagediv>
        <Welcomeimg src={Prediction} alt="loading" />
      </Imagediv>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
