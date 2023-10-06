import React, { useState } from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: center;
  background-color: #fff3;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 1200px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 45px;
`;

const ListItem = styled.ul`font-size: 23px;`;

const ReadMoreBtn = styled.button`
  width: 9.5rem;
  height: 2.4rem;
  background-color: #42c6f0;
  cursor: pointer;
  border: 0;
  color: #fff;
  font-weight: 500;
`;

const faqs = [
  {
    title: 'Pricing',
    question: 'How much does it cost to create a website?',
    answer:
      'The cost of creating a website can vary significantly based on factors such as complexity, features, design, and the platform you choose. A simple website may cost as little as a few hundred dollars, while a more complex one with custom features can cost thousands. Its essential to outline your requirements and get quotes from web developers or agencies to determine the exact cost.',
  },
  {
    title: 'Difference between a domain name and web hosting',
    question: 'What is the difference between a domain name and web hosting?',
    answer:
      'A domain name is the web address (e.g., www.yourwebsite.com), while web hosting is the service that stores your websites files and makes it accessible on the internet. You need both a domain name and web hosting to have a live website.',
  },
  {
    title: 'Platform of choice',
    question: 'Which platform should I use to build my website?',
    answer:
      'The choice of platform depends on your needs. Common options include WordPress, Wix, Squarespace, and custom development. WordPress is versatile and widely used, while website builders like Wix and Squarespace offer simplicity. Custom development provides complete control but requires more technical expertise.',
  },
  {
    title: 'Need to hire a professional',
    question: 'Do I need to hire a professional web designer/developer?',
    answer:
      'It depends on your skills and the complexity of your project. While DIY website builders are user-friendly, complex projects often benefit from the expertise of a professional web designer or developer to ensure functionality, design, and security.',
  },

  {
    title: 'Time frame',
    question: 'How long does it take to build a website?',
    answer:
      'The timeline varies based on the projects scope and complexity. A simple website can be up and running in a matter of days, while a more intricate site may take several weeks or even months to complete.',
  },
  {
    title: 'Content to include on a website',
    question: 'What content should I include on my website?',
    answer:
      'Your websites content should reflect your brand, products/services, and target audience. Common elements include an About Us page, contact information, product/service descriptions, testimonials, and a blog/news section.',
  },
];

const Faqs = () => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };
  return (
    <Section>
      <Container>
        <Title>Faqs</Title>
        <ListItem>
          {faqs.map((faq, index) => (
            <AccordionItem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
        </ListItem>
      </Container>
    </Section>
  );
};

export default Faqs;
