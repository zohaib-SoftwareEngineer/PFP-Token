import React from "react";
import {
  ServicesContainer,
  Heading,
  Subtitle,
  Subtitle1,
  Welcome,
  Welcomeimg,
  Welcomeimg1,
  Subtitle1Span,
  SubtitleSpan,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Specs1 from "../../images/specs2.png";
import Specs2 from "../../images/specs1.png";

// import Faq2 from "../../images/faq2.png";
// import Card from "./filp";
const Services = (props) => {
  return (
    <ServicesContainer>
      <Welcome>
        <Welcomeimg src={Specs1} alt="loading" />
        <div style={{ flexDirection: "row" }}>
          <Heading>RARITY AND SPECS</Heading>
          <div style={{ flexDirection: "column" }}>
            <Subtitle>
              You will hold a unique randomly generated NFT from 120
              <br />
              <div className="margin-letter-space"></div>
              <SubtitleSpan>
                {" "}
                select features each holding different levels of rarity.
              </SubtitleSpan>
            </Subtitle>
            <Subtitle1>
              There will also be a chance to win a Legendary Lion.
              <br />
              <div className="margin-letter-space"></div>
              <Subtitle1Span>
                {" "}
                There are 8 Legendary Lions total, each owner will win <br />{" "}
                <div className="margin-letter-space"></div> $5,000 as a bonus.{" "}
              </Subtitle1Span>
            </Subtitle1>
          </div>
        </div>

        <Welcomeimg src={Specs2} alt="loading" />
        <Welcomeimg1 src={Specs1} alt="loading" />
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
