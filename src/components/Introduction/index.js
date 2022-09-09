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
  
} from "./IntroElements";
import Coin from "../../images/zakat.png";
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";

const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
      
      <DirectionFlex>
      <Heading>Introducing the PFP Zakat System</Heading>
    
          <TextBlock>
          <SubtitleSpan2>
          Every Lunar New Year, 5% of the shares held by the NGO will be donated to UNRWA or burned. 
          </SubtitleSpan2>
          </TextBlock>
          <SubtitleSpan>
          <span></span>🔸 2.5% will be directly paid to UNRWA USA, an association chosen by the founders and ambassadors
          </SubtitleSpan>
          <SubtitleSpan>
          <span></span>🔸 5% will be sent to be burned in a blackhole to create a deflationary trend in the currency.
          </SubtitleSpan>
          <TextBlock>
          <SubtitleSpan2>
          There are NO transaction fees for our token for holders other than our founders and ambassadors, who, when selling tokens, are subject to Zakat. In addition, they can’t sell more than 5% of their portfolio per lunar year.          
          </SubtitleSpan2>
          </TextBlock>
          <Heading>Why UNRWA?</Heading>
          <TextBlock>
          <SubtitleSpan2>
          Since 1950, UNRWA has educated over 2.5 million refugees. The UNRWA  currently educates more than 532,857 refugee children and runs the region’s largest and most successful school system. With approximately 9 million annual patient visits, UNRWA also runs 144 primary health care facilities. Since URNWA is already providing help in these fields, the money we donate will go to medical care, education, and food.
          </SubtitleSpan2>
          </TextBlock>
          </DirectionFlex>
          <Imagediv>
          <Welcomeimg src={Coin} alt="loading" />
          </Imagediv>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
