import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: linear-gradient(30deg,#d0a435,#ec1f25);;
  /* background: #010606; */

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    height: 1550px;
    padding-top: 10px;
  }
`;

export const ServicesWrapper = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 5rem;
  padding: 0 50px;
  margin-top: -20px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesWrapper2 = styled.div`
  /* max-width: 1000px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 5rem;
  padding: 0 50px;
  /* margin-top: 3rem; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  width: 300px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 313px;
  width: 317px;
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #000;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 68%);
  /* border-radius: 15px; */
`;

export const ServicesH1 = styled.h1`
  font-size: 90.5px;
  color: #efeaa1;
  font-family: 'Bangers', cursive;
  font-weight: bold;
  text-shadow: 6px 3px #795f04;
  margin-bottom: 0px !important;
  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 45.4px;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0px !important;
  @media screen and (max-width: 768px) {
    font-size: 35.2px;
  }
`;


export const ServicesP = styled.p`
  font-size: 30.2px;
  font-family: "Montserrat", sans-serif;
  margin-top: -20px;
  text-align: center;
  color: #fff;
`;

export const Headingdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 0;
`;
export const Heading = styled.h3`
  font-size: 54px;
  font-family: "Orbitron", sans-serif;
  /* margin-bottom: 0px !important; */
  color: black;
  font-weight: 1000;

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
export const Mintingspan2 = styled.span`
  padding: 0 10px;
  font-family: "Orbitron", sans-serif;
  background-image: linear-gradient(to right, #d0a435, #ec1f24);
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  margin-top: -1.5rem;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const NavBtntwitter = styled.a`
  width: auto;
  border-radius: 50px;
  border: 2px solid #fff;
  margin-left: 2rem;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 15px;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #fff;
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;