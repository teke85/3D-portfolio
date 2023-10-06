import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff3;
`;

const Container = styled.div`
  margin-top: 2rem;
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const LeftColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const SideText = styled.span``;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 70vh;
  height: 70vh;
  border-radius: 25%;
  background-color: #42c6f0;
`;

const SpanElement = styled.div`
  display: inline;
  color: #42c6f0;
  font-weight: 800;
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
  font-weight: 700;
  background-color: #42c6f0;
  color: #fff;
`;

const Img = styled.img`
  width: 500px;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateX(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftColumn>
          <Title>
            Design.<SpanElement>Code.</SpanElement>Promote
          </Title>
          <WhatWeDo>
            <Line />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            At <SpanElement>Tekmu Creations</SpanElement>, we specialize in
            providing tailored support to businesses in the thriving hospitality
            industry, including lodges, site camps, resorts, and more. <br />
            <br />
            Our mission is to code innovative, visually stunning designs and
            strategically promote businesses, helping them thrive in the
            ever-evolving digital landscape.
          </Desc>
          <Button>View Services</Button>
        </LeftColumn>
        <RightColumn>
          <Box>
            <Img src="./img/thumbs.png" />
          </Box>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default Hero;
