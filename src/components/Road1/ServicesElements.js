import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const Heading = styled.h3`
  margin: -2rem 0 0rem 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 6vw;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const Headingdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Mintingspan = styled.em`
  -webkit-text-stroke: 1px #fff;
  color: transparent;
  font-style: normal;
  font-weight: 900;
  font-family: "Orbitron", sans-serif;
`;
export const Mintingspan2 = styled.span`
  padding: 0 10px;
  font-family: "Orbitron", sans-serif;
  background-image: linear-gradient(to right, #d0a435, #ec1f24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const RoadmapImg = styled.img`
  width: 100%;
`;