import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff; 
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const Faqsdiv = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Orbitron", sans-serif;
  width: 70%;
  margin-top: 5rem;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  padding: 3rem 0 1rem 0;
  border-color: #000;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 68%);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Faqimg = styled.img`
  width: 35%;
  @media screen and (max-width: 786px) {
    width: 80%;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #040014;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;


export const ServicesH2 = styled.h1`
  font-size: 90.5px;
  font-family: "Orbitron", sans-serif;
  background-image: linear-gradient(to right, #d0a435, #ec1f24);
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
  margin-bottom: 0px !important;
  display: none;
  @media screen and (max-width: 480px) {
    font-size: 4rem;
    display: block;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: "Orbitron", sans-serif;
`;

export const Headingdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 -3rem 0 ;
`;

export const Headingmain = styled.h3`
  margin: 0;
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
    display: none;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    display: none;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const Mintingspan2 = styled.span`
  padding: 0 10px;
  font-family: "Orbitron", sans-serif;
  background-image: linear-gradient(to right, #d0a435, #ec1f24);
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

export const Heading = styled.h3`
  /* margin: -3rem 0 2rem 0; */
  text-align: center;
  color: #000;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 4vw;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const Mintingspan = styled.em`
  -webkit-text-stroke: 1px #fff;
  color: transparent;
  font-style: normal;
  font-weight: 900;
  font-family: "Orbitron", sans-serif;
`;

export const SubtitleSpan2 = styled.span`
  /* margin-bottom: 35px; */
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  /* line-height: 2rem; */
  color: #ecae34;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
  `;