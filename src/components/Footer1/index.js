import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  // ServicesWrapper,
  //Cardstyle,
  // ServicesCard,
  // ServicesIcon,
  // ServicesH2,
  // ServicesP,
} from "./ServicesElements";
import Faq1 from "../../images/I2-Footer.png";
import Faq2 from "../../images/I1-Footer.png";
// import Discord from "../../images/Opensea.png";
import Insta from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Opensea from "../../images/Discord.png";
// import CLC from "../../images/footerClC.png";
// import Card from   "./filp";
const Services = (props) => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <img src={Faq2} alt="loading" style={{ width: "40%" }} />
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              display: "flex",
              width: "120%",
            }}
          >
            {/* <img
              src={Discord}
              alt="loading"
              style={{ width: 30, height: 30 }}
            /> */}
            <a
              href="https://www.instagram.com/metamaskclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Insta}
                alt="loading"
                style={{ width: 35, height: 35 }}
              />
            </a>
            <a
              href="https://discord.gg/UtNe8KTbb8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Opensea}
                alt="loading"
                style={{ width: 35, height: 35 }}
              />
            </a>
            <a
              href="https://twitter.com/MetaMaskClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Twitter}
                alt="loading"
                style={{ width: 35, height: 35 }}
              />
            </a>
          </div>
          <div style={{ marginTop: 20 }}>
            <p style={{ color: "#ffff", fontSize: 12 }}> Copyright Ⓒ 2022<br/>Meta Mask Club</p>
          </div>
        </div>
        <img
          src={Faq1}
          alt="loading"
          style={{ width: "40%", transform: "scaleX(-1)" }}
        />
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
