import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  // menubarOuter,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  SoicalMedia,
  // SoicalMediaIcon,
  MenubarOuter,
} from './NavbarElements';
// import Opensea from '../../images/Opensea.png';
// import Discord from '../../images/Discord.png';
// import Instagram from '../../images/Instagram.png';
// import Twitter from '../../images/Twitter.png';
import logo from '../../images/logo.png';
// import { _connectButtonWork } from '../../libs/utils';
// import logo from '../../images/Rowdy Raccoon.png';
const Navbar = ({ toggle, props }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
        <MenubarOuter>      
            <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              <img
                style={{ width: "20%"}}
                src={logo}
                alt="loading"
              />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks
                  to="system"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  System
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Economics"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  PFP Token
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks
                  to="Roadmap"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Roadmap
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="faq"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                FAQ's
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                Team
                </NavLinks>
              </NavItem>
            </NavMenu>
            <SoicalMedia>
            <NavBtn>
            <NavBtnLink
              to="services"
              smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
              // target='_blank'
            >
              Buy Token
            </NavBtnLink>
          </NavBtn>
            </SoicalMedia>
          </NavbarContainer>
          </MenubarOuter>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
