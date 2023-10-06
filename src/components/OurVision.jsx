import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  background-color: #fff3;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
`;

const SpanElement = styled.div`
  display: inline;
  color: #42c6f0;
  font-weight: 800;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 25%;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 55px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.hr`
  width: 30px;
  height: 2px;
  background-color: #fff;
`;

const Subtitle = styled.h2`
  letter-spacing: 2px;
`;

const Box = styled.div ``;

const Desc = styled.p`
  font-weight: 500;
  letter-spacing: 1.1px;
  line-height: 20px;
`;

const Button = styled.button`
border: 0;
  width: 200px;
  height: 3rem;
  cursor-pointer: pointer;
  font-weight: 500;
`;

const Img = styled.img`
color: #fff;
  width: 250px;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateX(20px);
    }
  }
`;

const OurVision = () => {
  return (
    <Section>
      <Container>
        <RightColumn>
          <Box>
            <Img src="./img/bulb.png" />
          </Box>
        </RightColumn>
        <LeftColumn>
          <Title>Our Vision</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>Mission</Subtitle>
          </WhatWeDo>
          <Desc>
            At <SpanElement>Tekmu Creations</SpanElement>, our vision is to be
            the driving force behind your digital success. We aspire to set new
            standards in the realms of digital marketing and web development,
            leveraging innovation and creativity to empower businesses. Our
            unwavering commitment is to deliver exceptional, tailor-made
            solutions that not only meet but exceed the unique needs and
            expectations of every client we serve. <br />
            <br />
            With a relentless pursuit of excellence, we envision a future where
            <SpanElement> Tekmu Creations</SpanElement> is synonymous with
            cutting-edge digital strategies, unparalleled web experiences, and
            unwavering client satisfaction. Together, we'll shape a digital
            landscape where your success knows no bounds.
          </Desc>
          <Button>View Services</Button>
        </LeftColumn>
      </Container>
    </Section>
  );
};

export default OurVision;
