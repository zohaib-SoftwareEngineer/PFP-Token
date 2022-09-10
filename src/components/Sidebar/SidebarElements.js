import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
 `;
// export const NavBtnLink = styled.a`
//   border-radius: 50px;
//   background: white;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: white;
//   font-size: 18px;
//   font-family: Lato;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   text-transform: uppercase;
//   font-weight: bold;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: black;
//   }
// `;
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

export const SoicalMediaIcon = styled.a`
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const buttonSide = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #ffaa4c;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  margin-top: -0.3rem;
  position: relative;
  background: linear-gradient(to right, #d0a435, #ec1f25);
    display: inline-block;
    font-size: 16px;
    line-height: normal;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: 11px 22px 11px 22px;
    clip-path: polygon( /*29.4% * height -> 45px * 0.294 = 13.2px, rounded to 12/14px*/ 12px 1.5px, 14px 0, calc(100% - 14px) 0, calc(100% - 12px) 1.5px, 100% 48%, 100% 52%, calc(100% - 12px) calc(100% - 1.5px), calc(100% - 14px) 100%, 14px 100%, 12px calc(100% - 1.5px), 0 52%, 0 48% );
    &:hover {
    /* transition: all 0.2s ease-in-out;
    background: transparent;
    color: black;
    border: 3px solid #e99b04; */
  }
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 18px;
  font-family: Lato;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;


    color: #fff;
    filter: saturate(.9);
    text-shadow: 0 1px 3px #0002;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: transparent; */
    color: black;
  }
`;