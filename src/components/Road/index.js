import React from "react";
import {
  EvenContainer,
  EvenImg,
  EvenImgContainer,
  EvenText,
  Heading,
  Headingdiv,
  Mintingspan,
  Mintingspan2,
  NavBtn,
  NavBtnDiscord,
  OddContainer,
  OddImg,
  ServicesContainer,
  SocialMedia,
  SubHeading,
  TextContainer,
} from "./ServicesElements";

import Discord from "../../images/Discord.png";
import I1 from "../../images/I1.jpg";
import I2 from "../../images/I2.jpg";
import I3 from "../../images/I3.jpg";
import I4 from "../../images/I4.jpg";
import I5 from "../../images/I5.jpg";
import I6 from "../../images/I6.jpg";

const Services = (props) => {
  return (
    <ServicesContainer id="Benefits">
      <Headingdiv>
        <Heading>
          Benefits&nbsp;<Mintingspan>&</Mintingspan>&nbsp;
          <Mintingspan2>Utilities</Mintingspan2>
        </Heading>
      </Headingdiv>
      {/* 1st section  */}
      <EvenContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <EvenImg src={I2} />
        </EvenImgContainer>
      </EvenContainer>
      {/* 2nd Section */}
      <OddContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <OddImg src={I5} />
        </EvenImgContainer>
      </OddContainer>
      {/* 3rd Section */}
      <EvenContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <EvenImg src={I3} />
        </EvenImgContainer>
      </EvenContainer>
      {/* 4th Section */}
      <OddContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <OddImg src={I4} />
        </EvenImgContainer>
      </OddContainer>
      {/* 5th Section */}
      <EvenContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <EvenImg src={I1} />
        </EvenImgContainer>
      </EvenContainer>
      {/* 6th Section */}
      <OddContainer>
        <TextContainer>
          <SubHeading>
            <Mintingspan2>1. Lorem</Mintingspan2>
            Ispum&nbsp;<Mintingspan>Dol</Mintingspan>&nbsp;
          </SubHeading>
          <EvenText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam laboriosam nam esse enim recusandae quae placeat rerum
            nobis cupiditate, magnam eius reiciendis aut fuga mollitia quo eum
            maiores, magni saepe fugiat ratione! Autem quibusdam consequuntur
            reprehenderit, eveniet reiciendis soluta expedita vel iure cumque
            nihil, quos cum nam ipsam quidem.
          </EvenText>
          <SocialMedia>
            <NavBtn>
              <NavBtnDiscord href="http://www.metamaskclub.com" target="_blank">
                <img
                  src={Discord}
                  style={{ width: 35, height: 35, margin: "-2px 13px" }}
                  alt={"Discord"}
                />
                Discord
              </NavBtnDiscord>
            </NavBtn>
          </SocialMedia>
        </TextContainer>
        <EvenImgContainer>
          <OddImg src={I6} />
        </EvenImgContainer>
      </OddContainer>
    </ServicesContainer>
  );
};

export default Services;
