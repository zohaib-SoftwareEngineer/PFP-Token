import styled from "styled-components";

export const Bg = styled.div`
  text-align: center;
  /* background-image: url("bann.png");
   */

  background: linear-gradient(30deg, #d0a435, #ec1f25);
  opacity: 0.9;
  min-width: 100%;
  min-height: 100%;
  /* background-size: cover; */
  height: 759px;
  /* background-position: center; */
  border-bottom: 3px solid #00abcb;

  @media screen and (max-width: 768px) {
    background-image: url("mobileLogo.jpg");
    height: 693px;
    width: 100%;
  }
`;



export const NavBtnLinkPlus = styled.button`
  /* width: 100%; */
  border-radius: 50px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  background-image: linear-gradient(to right, #d0a435, #ec1f25);
  height: 60px;
  white-space: nowrap;
  padding: 2px 20px;
  color: white;
  font-size: 38px;
  margin-top: -96px;
  font-family: "AgencyBold";
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff;
    border: 1px solid #fff;
    color: black; */
    /* color: white;
    box-shadow: 0 0 15px #fff; */
    color: white;
    --border-glow: 0 0 6px 2px #d0a435, 0 0 18px 3px #d0a435,
      0 0 36px 4px #ec1f24, 0 0 36px 4px #ec1f24,
      0 0 30px 10px rgba(19, 111, 231, 0.8);
    box-shadow: var(--border-glow);
    border: 1px solid #d0a435;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;
export const NavBtnLinkMinus = styled.button`
  /* width: 100%; */
  border-radius: 50px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  background-image: linear-gradient(to right, #d0a435, #ec1f25);
  height: 60px;

  white-space: nowrap;
  padding: 0px 24px;
  color: white;
  font-size: 38px;
  margin-top: -96px;
  font-family: "AgencyBold";
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff;
    border: 1px solid #fff;
    color: black; */
    /* color: white;
    box-shadow: 0 0 15px #fff; */
    color: white;
    --border-glow: 0 0 6px 2px #d0a435, 0 0 18px 3px #d0a435,
      0 0 36px 4px #ec1f24, 0 0 36px 4px #ec1f24,
      0 0 30px 10px rgba(19, 111, 231, 0.8);
    box-shadow: var(--border-glow);
    border: 1px solid #d0a435;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;
export const HeroContainer = styled.div`
  /* border-top: solid black 6px; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  /* background: #000;   */
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const RemainingBG = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  /* border-bottom: 3px solid #00abcb; */
  /* background-color: #000000; */
  flex-direction: column;
`;
export const MarginDiv = styled.div`
  margin-top: 1%;
  @media screen and (max-width: 768px) {
    margin-top: 15%;
  }
`;
export const NavBtnLink = styled.a`
  width: 62%;
  border-radius: 50px;
  background-image: linear-gradient(to right, #d0a435, #ec1f25);
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-family: "Orbitron", sans-serif;
  font-size: 28px;
  outline: none;
  text-transform: uppercase;
  border: none;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff;
    border: 2px solid #fff;
    color: black; */
    /* color: white;
    box-shadow: 0 0 15px #fff; */
    color: white;
    --border-glow: 0 0 6px 2px #d0a435, 0 0 18px 3px #d0a435,
      0 0 36px 4px #ec1f24, 0 0 36px 4px #ec1f24,
      0 0 30px 10px rgba(19, 111, 231, 0.8);
    box-shadow: var(--border-glow);
    border: 1px solid #d0a435;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;

export const InputSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-top: 6rem;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 15vh; */
  @media screen and (max-width: 768px) {
    height: 10vh;
  }
`;
export const InputMint = styled.input`
  width: 50%;
  pointer-events: none;
  text-align: center;
  border-radius: 50px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  background-image: linear-gradient(to right, #d0a435, #ec1f25);
  white-space: nowrap;
  /* padding: 10px 22px; */
  padding-right: auto;
  padding-left: 2vh;
  color: white;
  font-size: 38px;
  margin-top: -96px;
  font-family: "Orbitron", sans-serif;
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    /* transition: all 0.2s ease-in-out;
    background: #fff;
    border: 2px solid #fff;
    color: black; */
    /* color: white;
    box-shadow: 0 0 15px #fff; */
    color: white;
    --border-glow: 0 0 6px 2px #d0a435, 0 0 18px 3px #d0a435,
      0 0 36px 4px #ec1f24, 0 0 36px 4px #ec1f24,
      0 0 30px 10px rgba(19, 111, 231, 0.8);
    box-shadow: var(--border-glow);
    border: 1px solid #d0a435;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0vh;
  }
`;

export const Heading = styled.h3`
  margin: 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 4.5vw;
  margin-top: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const SubHeading = styled.h4`
  margin: 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 350;
  text-transform: uppercase;
  font-size: 3vw;
  /* margin-top: 4rem; */

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const SubHeading2 = styled.h4`
  margin: 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 250;
  text-transform: uppercase;
  font-size: 2vw;
  /* margin-top: 4rem; */

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: 0px !important;
    margin-top: 20px;
  }
`;

export const Megadiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
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

