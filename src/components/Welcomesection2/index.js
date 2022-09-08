import React from "react";
import {
  ServicesContainer,
  Welcome,
  DirectionFlex,
  SubtitleSpan,
  Headingdiv,
  Headingmain,
  Mintingspan2,
  VideoSection,
  MetaVideo,
} from "./ServicesElements";
import IntroVideo from "../../images/statred.mp4";
import HoverImageExtention from "../Animations/HoverImageExtention";
const Services = (props) => {
  return (
    <ServicesContainer>
      <Welcome>
        <DirectionFlex>
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
          <Headingdiv>
            <Headingmain>
              Our
              <Mintingspan2>&nbsp;Legends</Mintingspan2>
            </Headingmain>
          </Headingdiv>
          <HoverImageExtention />
          <Headingdiv>
            <Headingmain>
              Our
              <Mintingspan2>&nbsp;Vision</Mintingspan2>
            </Headingmain>
          </Headingdiv>
          <VideoSection>
            <MetaVideo autoPlay loop muted>
              <source src={IntroVideo} type="video/mp4" />
            </MetaVideo>
          </VideoSection>
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
        </DirectionFlex>
      </Welcome>
    </ServicesContainer>
  );
};

export default Services;
