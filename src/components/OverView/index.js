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
  TextBlock,
  // SocialMedia,
  // NavBtnDiscord,
  // NavBtntwitter,
  // Headingdiv,
  // Headingmain,
  // Mintingspan2,
  
} from "./OverviewElements";
import Coin from "../../images/coin.png";
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";

const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
      <Imagediv>
      <Welcomeimg src={Coin} alt="loading" />
    </Imagediv>
       
        <DirectionFlex>
          <Heading>Why?</Heading>
          <TextBlock>
          <SubtitleSpan2>
          We Created this project to:
          </SubtitleSpan2>
          </TextBlock>
          <SubtitleSpan>
          <span></span>🔸 Help bridge the gap between Muslims and Palestinians.
          </SubtitleSpan>
          <SubtitleSpan>
          <span></span>🔸 Create the first cryptocurrency aligned to the Muslim world and laws.
          </SubtitleSpan>
          <SubtitleSpan>
          <span></span>🔸 Provide an alternative to the current volatile inflation indexed on most currencies.
          </SubtitleSpan>
          <SubtitleSpan>
          <span></span>🔸 Address the lack of consensus of Muslims towards our Palestinian brothers.
          </SubtitleSpan>
          <Heading>How?</Heading>
           <TextBlock>
          <SubtitleSpan2>
          Thanks to innovative blockchain technologies and the rise of Web 3.0, we can associate rules with a currency, allowing us to create a coin that respects the laws of Islam. The PFP coin pays Zakat to holders and the larger NGO and transfers it to UNRWA USA, an organization renowned for helping the Palestinians.
          </SubtitleSpan2>
          </TextBlock>
        </DirectionFlex>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
