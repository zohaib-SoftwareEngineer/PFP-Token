import React from "react";
import {
  ServicesContainer,
  Heading,
  Welcome,
  DirectionFlex,
  Welcomeimg,
  SubtitleSpan,
  Imagediv,
  SocialMedia,
  NavBtnDiscord,
  NavBtntwitter,
  Headingdiv,
  Headingmain,
  Mintingspan2,
  
} from "./ServicesElements";
import T4 from "../../images/ezgif.gif";
import Discord from "../../images/Discord.png";
import twitter from "../../images/Twitter.png";
import { NavBtn } from "../Navbar/NavbarElements";
import ImageSlider from "../Animations/imageSlider";

const Services = (props) => {
  return (
    <ServicesContainer id="about">
      <Welcome>
        <Imagediv>
          <Welcomeimg src={T4} alt="loading" />
        </Imagediv>
        <DirectionFlex>
          <Heading>MetaMask Club</Heading>
          <SubtitleSpan>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            dicta dolores? Esse itaque eius earum, fugit nesciunt, culpa placeat
            quisquam quis laboriosam assumenda consectetur! Possimus eveniet
            omnis explicabo nemo voluptate! culpa placeat quisquam quis
            laboriosam assumenda consectetur! Possimus eveniet omnis explicabo
            nemo voluptate!
          </SubtitleSpan>
          <SubtitleSpan>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            dicta dolores? Esse itaque eius earum, fugit nesciunt, culpa placeat
            quisquam quis laboriosam assumenda consectetur! Possimus eveniet
            omnis explicabo nemo voluptate! Esse itaque eius earum, fugit
            nesciunt, culpa placeat quisquam quis laboriosam assumenda
            consectetur! Possimus eveniet omnis explicabo nemo voluptate!
          </SubtitleSpan>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord>
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
            <NavBtn>
              <NavBtntwitter>
                <img
                  src={twitter}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                FOLLOW US
              </NavBtntwitter>
            </NavBtn>
          </SocialMedia>
        </DirectionFlex>
      </Welcome>
      <Headingdiv>
        <Headingmain>
          Our
          <Mintingspan2>&nbsp;Collection</Mintingspan2>
        </Headingmain>
      </Headingdiv>
      <ImageSlider />
    </ServicesContainer>
  );
};

export default Services;
