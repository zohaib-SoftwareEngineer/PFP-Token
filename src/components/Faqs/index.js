import React from 'react';
import {
  ServicesContainer,
  ServicesH2,
  Faqsdiv,
  Headingdiv,
  Heading,
  SubtitleSpan2,
 
} from './FAQsElements';
import Faq from 'react-faq-component';

const data = {
  title: "",
  rows: [
    {
      title:
        "How do I buy a PFP token?",
      content: `Create an account, connect to your account, choose a payment method: direct wallet transfer or Metamask connection, and approve the payment. You are now officially part of the PFP project. Approve the payment. You are officially into the PFP project.`,
    },
  ],
};
const data1 = {
  title: "",
  rows: [
    {
      title:
        "Can I sell my PFP token ?",
      content: `You will be able to sell PFP tokens after the ICO. PFP will be available on the most famous swap platforms to minimize friction.`,
    },
  ],
};
const data2 = {
  title: "",
  rows: [
    {
      title:
        "Are there fees?",
      content: `There are no fees and you do not need to pay Zakat. Only ambassadors and the team’s wallets are subject to fees.`,
    },
  ],
};
const data3 = {
  title: "",
  rows: [
    {
      title:
        "How PFP pays Zakat",
      content: `The coin is owned by UNRWA USA at 36%, the association withdraws 7.5% of their share every year, with a part burned to prevent the coin from suffering too much sales pressure. Beyond that, when a wallet of the team or ambassadors sells coins, it is automatically charged fees which are automatically returned to the wallet of the NGO.`,
    },
  ],
};


const styles = {
  bgColor: '#f9f9f9',
  titleTextColor: '#e99b04',
  rowTitleColor: '#e99b04',
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
      <Heading>FAQs</Heading>
    
      <SubtitleSpan2>
      Every Lunar New Year, 5% of the shares held by the NGO will be donated to UNRWA or burned. 
      </SubtitleSpan2>
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
       
      </Faqsdiv>
    </ServicesContainer>
  );
};

export default Services;
