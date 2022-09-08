import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 9rem;
  

  /* m  argin-top:100px; */
  /* background: rgb(1, 6, 6); */
  /* background: linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109); */
  background: black;
  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 40px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding-top: 40px;
  }
`;

export const ServicesWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const footerStyle = styled.div``;

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

export const ServicesH1 = styled.h1`
  font-size: 49.5px;
  color: #efeaa1;
  font-family: 'Bangers', cursive;
  font-weight: bold;
  //margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CardstyleFront = styled.div`
  background-color: #570909;
  height: 80px;
  width: 600px;
  color: #efeaa1;
  font-family: 'Bangers', cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
export const CardstyleBack = styled.div`
  background-color: #570909;
  height: 80px;
  width: 600px;
  color: #efeaa1;
  font-family: 'Bangers', cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20.4px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
