import React from "react";
import coin from "../../images/coin.png";
import Discord from "../../images/Discord.png";

import {
  ServicesContainer,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Headingdiv,
  Heading,
  ServicesWrapper2,
  NavBtn,
  NavBtntwitter,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Headingdiv>
      <Heading>Team</Heading>
      </Headingdiv>
           <ServicesWrapper2>
           <ServicesCard>
           <ServicesIcon src={coin} />
             <ServicesH2>Name</ServicesH2>
             <ServicesP>Role</ServicesP>
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
        <ServicesCard>
          <ServicesIcon src={coin} />
          <ServicesH2>
          Name
          </ServicesH2>
          <ServicesP>Role</ServicesP>
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
            <ServicesIcon src={coin} />
            <ServicesH2>Name</ServicesH2>
            <ServicesP>Role</ServicesP>
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
          </ServicesWrapper2>
    </ServicesContainer>
  );
};

export default Services;
