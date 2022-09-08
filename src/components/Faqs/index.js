import React from 'react';
import {
  ServicesContainer,
  ServicesH2,
  Faqsdiv,
  Headingdiv,
  Mintingspan2,
  Heading,
  Mintingspan,
 
} from './ServicesElements';
import Faq from 'react-faq-component';

const data = {
  title: "",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto unde voluptas atque culpa! Quo, possimus doloremque. Debitis ducimus saepe perspiciatis placeat culpa quibusdam vel cupiditate, odio expedita esse voluptatibus.`,
    },
  ],
};
const data1 = {
  title: "",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur ?",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias aspernatur nisi! Perferendis quia, ea enim dolores sequi corrupti sapiente, quod atque illo, fugiat optio aliquid? Et voluptates inventore nam!`,
    },
  ],
};
const data2 = {
  title: "",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur?",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima.`,
    },
  ],
};
const data3 = {
  title: "",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur?",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima.`,
    },
  ],
};
const data4 = {
  title: "",
  rows: [
    {
      title:
        "Lorem ipsum dolor sit, amet consectetur?",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, minima.`,
    },
  ],
};

const styles = {
  bgColor: '#000',
  titleTextColor: '#fff',
  rowTitleColor: '#fff',
  fontFamily: "Orbitron, sans-serif",
  
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
  
};
const Services = props => {
  return (
    <ServicesContainer id="faq">
      <Headingdiv>
        <Heading>
          &nbsp;<Mintingspan>Frequently</Mintingspan>
          <br />
          Asked &nbsp;
          <Mintingspan2>Questions</Mintingspan2>
        </Heading>
      </Headingdiv>
      <ServicesH2>FAQ'S</ServicesH2>
      <Faqsdiv>
          <Faq data={data} styles={styles} config={config} />
          <div style={{ marginTop: 20 }}></div>
          <Faq data={data1} styles={styles} config={config} />
          <div style={{ marginTop: 20 }}></div>
          <Faq data={data2} styles={styles} config={config} />
          <div style={{ marginTop: 20 }}></div>
          <Faq data={data3} styles={styles} config={config} />
          <div style={{ marginTop: 20 }}></div>
          <Faq data={data4} styles={styles} config={config} />
          <div style={{ marginTop: 20 }}></div>
        {/* <div style={{ marginTop: 20 }}></div>
        <Faq data={data5} styles={styles} config={config} /> */}
        {/* <Faqimg src={Faq2} alt="loading" /> */}
        {/* <div style={{ flexDirection: 'column' }}>
          {' '}
          <Card
            front='What is the minting process'
            back='Connect your wallet to the Cheeky Lion Club website and mint
        1 to 10 random Lions for 0.07 eth each.'
          />
          <Card
            front='Secondary Royalties'
            back='0.5% lifetime for minters. 1.5% for Lion holders 4% Marketing and Team'
          />
          <Card
            front='Enter the Club Bar'
            back='Details on how to prove membership will be shared shortly after launch.'
          />
          <Card
            front='Members only Poker Night'
            back='You will have access to our members only online private poker rooms and tables,
        where you can compete against fellow Cheeky Lion members.'
          />
        </div> */}
        {/* <Faqimg src={Faq1} alt="loading" /> */}
      </Faqsdiv>
    </ServicesContainer>
  );
};

export default Services;
