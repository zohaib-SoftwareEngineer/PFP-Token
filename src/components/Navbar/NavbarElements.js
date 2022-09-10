import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import "../../global.js";
export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav
      ? `linear-gradient(0.25turn, #4c1109, #a0410f, #4c1109)`
      : "transparent"};

  height: 100px;
  margin-top: -47px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  width: 100%;
  top: 80px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const MenubarOuter = styled.div`
    position: fixed;
    left: 0px;
    top: 15px;
    width: 100%;
    height: 80px;
    z-index: 1000;
    transition: all 0.5s ease 0s;
    filter: drop-shadow(rgb(0, 0, 0) 0px 2px 50px);
`;
export const NavbarContainer = styled.div`
 position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #111;
    height: 80px;
    clip-path: polygon( calc(50% - 1000px/2 - 2px) 2px, calc(50% - 1000px/2 + 1px) 0, calc(50% + 1000px/2 - 1px) 0, calc(50% + 1000px/2 + 2px) 2px, calc(50% + 1000px/2 + 23px) calc(50% - 2px), calc(50% + 1000px/2 + 23px) calc(50% + 2px), calc(50% + 1000px/2 + 2px) calc(100% - 2px), calc(50% + 1000px/2 - 1px) 100%, calc(50% - 1000px/2 + 1px) 100%, calc(50% - 1000px/2 - 2px) calc(100% - 2px), calc(50% - 1000px/2 - 23px) calc(50% + 2px), calc(50% - 1000px/2 - 23px) calc(50% - 2px) );
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 0;
    
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  /* margin-top: -1rem; */
  @media screen and (max-width: 960px) {
    width: 50%;
  }
  @media screen and (max-width: 420px) {
    width: 86%;
    display: flex;
  justify-content: flex-start;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  list-style: none;
  justify-content: center;
  text-align: center;
  /* margin-bottom: -20px; */
  font-size: 18px;
  font-weight: 700;
  font-family: "zinc" !important;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
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

export const NavLinks = styled(LinkS)`
  color: #fff;
    font-family: Lato;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.7rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }
  &:hover {
    color: #999 !important;
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

export const LogoImg = styled.img`
  width: 200px;
  height: 73px;
`;

export const SoicalMedia = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-around;
  -webkit-align-items: center;
  margin-top: 5px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 20%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SoicalMediaIcon = styled.a`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

