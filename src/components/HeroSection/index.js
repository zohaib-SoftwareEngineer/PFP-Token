import React, {useState} from "react";
import Particles from "react-tsparticles";
import CoinSlider from "../Animations/Coin Slider";
import { Heading, Headingdiv, InputMint, InputSection, Megadiv, Mintingspan, Mintingspan2, NavBtnLinkMinus, NavBtnLinkPlus, SubHeading, SubHeading2 } from "./HeroElements";
import {
  HeroContainer,
  MarginDiv,
  RemainingBG, 
  Bg,
  NavBtn,
  NavBtnLink,
} from "./HeroElements";

function HeroSection() {
  const [value, setValue] = useState(1);
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
  };
  return (
    <>
    <HeroContainer>
      <Bg>
      <Megadiv>
      <CoinSlider/>  
      <Heading>
      Peace for Palestine
      </Heading> 
      <SubHeading>
      First Halal Muslim Token
      </SubHeading>  
      <SubHeading2>
      The first coin to bring together the entire Muslim community while respecting Islamic laws.
      </SubHeading2>  
      </Megadiv>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 600,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      </Bg>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
