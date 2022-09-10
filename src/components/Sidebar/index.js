import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SoicalMediaIcon,
  SidebarLink,
  NavBtn,
  NavBtnLink,
} from './SidebarElements';
// import Discord from '../../images/Opensea.png';

import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>

          <SidebarLink
            to='system'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
          system
          </SidebarLink>

          <SidebarLink
            to='Economics'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
          PFP Token
          </SidebarLink>
          <SidebarLink
            to='Roadmap'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
          Roadmap
          </SidebarLink>
          <SidebarLink
            to='faq'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
          FAQ's
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
          Team
          </SidebarLink>

          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div className='side-bar-menu'>
              <SoicalMediaIcon
                href='https://pfptoken.netlify.app/'
                target='_blank'
              >
              {/*  <img
                  src={
                    'https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg'
                  }
                  style={{
                    width: 43,
                    height: 43,
                    marginTop: -20,
                    color: 'black',
                  }}
                  alt={'Opensea'}
                />*/}
              </SoicalMediaIcon>
              <SoicalMediaIcon
                href='https://pfptoken.netlify.app/'
                target='_blank'
              >
                <FaDiscord />
              </SoicalMediaIcon>

              <SoicalMediaIcon
                href='https://pfptoken.netlify.app/'
                target='_blank'
              >
                <FaTwitter />
              </SoicalMediaIcon>
              <SoicalMediaIcon
                href='https://pfptoken.netlify.app/'
                target='_blank'
              >
                <FaInstagram />
              </SoicalMediaIcon>
            </div>
          </div>
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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
