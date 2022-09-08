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
export const Headingdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.h3`
  margin: -3rem 0 2rem 0;
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

export const SubHeading = styled.h3`
  margin: 0;
  text-align: center;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3vw;
  border-bottom: 2px solid #dd151e;

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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
`;

export const OddContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EvenContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;
export const EvenText = styled.p`
  margin-bottom: 35px;
  font-size: 16px;
  padding: 50px 50px 50px 50px;
  font-family: "Montserrat", sans-serif;
  line-height: 2rem;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export const EvenImgContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;
export const EvenImg = styled.img`
  width: 575px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #ffffffad;
  box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 68%);
  -webkit-transform: scaleX(-1);
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;
export const OddImg = styled.img`
  width: 575px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #ffffffad;
  box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 68%);
  /* -webkit-transform: scaleX(-1); */
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -2rem;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;

  @media screen and (max-width: 768px) {
    /* display: none; */
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