import React from "react";
import Icon1 from "../../images/TM1.jpg";
import Icon2 from "../../images/TM3.jpg";
import Icon3 from "../../images/TM6.jpg";
import Icon4 from "../../images/TM2.jpg";
import Icon5 from "../../images/TM4.jpg";
import Icon6 from "../../images/TM5.jpg";
import Discord from "../../images/Discord.png";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Headingdiv,
  Heading,
  Mintingspan,
  Mintingspan2,
  ServicesWrapper2,
  NavBtn,
  NavBtntwitter,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Headingdiv>
        <Heading>
          Meta&nbsp;<Mintingspan>Mask</Mintingspan>
          <br />
          <Mintingspan2>Team</Mintingspan2>
        </Heading>
      </Headingdiv>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Nasir</ServicesH2>
          <ServicesP>Role</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Sheikhu</ServicesH2>
          <ServicesP>Role</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Daniel</ServicesH2>
          <ServicesP>Role</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <ServicesWrapper2>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>NNamdi</ServicesH2>
          <ServicesP>Designer</ServicesP>
          <NavBtn>
            <NavBtntwitter>
              <img
                src={Discord}
                style={{ width: 35, height: 35, margin: "-2px 13px" }}
                alt={"Discord"}
              />
              Join US
            </NavBtntwitter>
          </NavBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Zohaib</ServicesH2>
          <ServicesP>Developer</ServicesP>
          <NavBtn>
            <NavBtntwitter href="https://discord.gg/SUqW7wBUs3" target="blank">
              <img
                src={Discord}
                style={{ width: 35, height: 35, margin: "-2px 13px" }}
                alt={"Discord"}
              />
              Join US
            </NavBtntwitter>
          </NavBtn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Adil</ServicesH2>
          <ServicesP>Developer</ServicesP>
          <NavBtn>
            <NavBtntwitter>
              <img
                src={Discord}
                style={{ width: 35, height: 35, margin: "-2px 10px" }}
                alt={"Discord"}
              />
              Join US
            </NavBtntwitter>
          </NavBtn>
        </ServicesCard>
      </ServicesWrapper2>
    </ServicesContainer>
  );
};

export default Services;
