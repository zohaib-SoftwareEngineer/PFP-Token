import React from "react";
import {
  ServicesContainer,
  Headingdiv,
  Heading,
  Mintingspan,
  Mintingspan2,
  RoadmapContainer,
  RoadmapImg,
  
} from "./ServicesElements";
import roadmap from "../../images/roadmap.webp"

const Services = (props) => {
  return (
    <ServicesContainer id="story">
      <Headingdiv>
        <Heading>
          <Mintingspan>Our</Mintingspan>
          &nbsp;<Mintingspan2>Road</Mintingspan2>&nbsp;Map
        </Heading>
      </Headingdiv>
      <RoadmapContainer>
        <RoadmapImg src={roadmap}/>
      </RoadmapContainer>
    </ServicesContainer>
  );
};

export default Services;
