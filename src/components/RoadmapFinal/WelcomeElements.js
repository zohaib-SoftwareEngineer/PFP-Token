import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: #fff;
  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const Welcome = styled.div`
  justify-content: center;
  align-items: center;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-top: 5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const DirectionFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  margin-top: -2rem;
  
`;
export const Heading = styled.h1`
  /* padding: 0 10px;
  margin: 0 -20px; */
  /* position: relative; */
  /* z-index: 2; */
  font-size: 64px;
  font-family: "Orbitron", sans-serif;
  /* background-image: linear-gradient(to right, #d0a435, #ec1f25); */
  /* -webkit-background-clip: text; */
  color: black;
  /* -webkit-text-fill-color: transparent; */
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
export const Heading1 = styled.span`
  margin-bottom: 24px;
  font-size: 64px;
  color: #e4a300;
  font-family: 'Bangers', cursive;
  line-height: 1.1;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 34px;
  line-height: 24px;
  font-family: 'Bangers', cursive;
  color: #00bec6;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const SubtitleSpan = styled.span`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 2rem;
  color: #666;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const SubtitleSpan2 = styled.span`
  margin-bottom: 35px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 2rem;
  color: #e99b04;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Subtitle1 = styled.p`
  font-size: 34px;
  line-height: 24px;
  font-family: 'Bangers', cursive;
  color: #e4a300;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const Subtitle1Span = styled.span`
  font-size: 34px;
  line-height: 24px;
  font-family: 'Bangers', cursive;
  color: #e4a300;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const addMargin = styled.div`
  margin-top: 16px;
  @media screen and (max-width: 768px) {
    margin-top: 13px;
  }
`;
export const Imagediv = styled.div`
   display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Welcomeimg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 73%;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  /* margin-top: -1rem; */
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
export const NavBtnDiscord = styled.a`
  width: auto;
  border-radius: 50px;
  background: linear-gradient(
    to right,
    #e0562b,
    #e34c28,
    #e74026,
    #ea3224,
    #ed1c24
  );
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 15px;
  outline: none;
  text-transform: uppercase;
  border: none;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    /* transition: all 0.2s ease-in-out;
    background: #708090;*/
    border: 2px solid #fff;
    color: white;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    width: 100%;
  }
`;

export const Headingdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Headingmain = styled.h3`
  margin: 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 6vw;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    justify-content: center;
    display: flex;
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