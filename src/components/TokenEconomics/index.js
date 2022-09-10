import React from "react";
import {
  ServicesContainer,
  Heading,
  Welcome,
  DirectionFlex,
  SubtitleSpan2,
  EcnomicDiv,
  EcnomicDiv2,
  SubtitleSpan,
  SubtitleSpan3,
  Headingdiv,
  Imagediv,
  Welcomeimg,
  // SocialMedia,
  // NavBtnDiscord,
  // NavBtntwitter,
  // Headingdiv,
  // Headingmain,
  // Mintingspan2,
  
} from "./EconomicsElements";
import Allocation from "../../images/tokenallocation.png"
// import Discord from "../../images/Discord.png";
// import twitter from "../../images/Twitter.png";
// import { NavBtn } from "../Navbar/NavbarElements";

const Services = (props) => {
  return (
    <ServicesContainer id="Economics">
      <Welcome>
       
        <DirectionFlex>
          <Heading>PFP Crypto Token Economics</Heading>
          <SubtitleSpan3>
          Our initial coin offering will run until the soft cap is reached. The full details of PFP can be found within the platform.
          </SubtitleSpan3>
          <EcnomicDiv>
            <EcnomicDiv2>
            <SubtitleSpan>
            5,000,000,000
            </SubtitleSpan>
            <SubtitleSpan2>
            Total Token Supply
            </SubtitleSpan2>
            </EcnomicDiv2>

            <EcnomicDiv2>
            <SubtitleSpan>
            $0.06 USD
            </SubtitleSpan>
            <SubtitleSpan2>
            PFP Token Price
            </SubtitleSpan2>
            </EcnomicDiv2>

            <EcnomicDiv2>
            <SubtitleSpan>
            ETH, USDT, WBTC
            </SubtitleSpan>
            <SubtitleSpan2>
            ACCEPTED CURRENCY
            </SubtitleSpan2>
            </EcnomicDiv2>
          </EcnomicDiv>
          <Headingdiv>
          <Heading>PFP Token Allocation</Heading>
          </Headingdiv>
          <Imagediv>
          <Welcomeimg src={Allocation} alt="loading" />
        </Imagediv>
          </DirectionFlex>
          </Welcome>
    </ServicesContainer>
  );
};

export default Services;
