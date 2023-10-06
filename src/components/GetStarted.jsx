import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: center;
  background-color: #fff3;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 55px;
  cursor: crosshair;
  color: lightgray;
  &:hover {
    color: #42c6f0;
  }
`;

const Button = styled.button`
  border: 0;
  width: 200px;
  height: 3rem;
  cursor-pointer: pointer;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #42c6f0;
    color: #fff;
  }
`;

const GetStarted = () => {
  return (
    <Section>
      <Container>
        <Title>Ready to Get Started?</Title>
        <Button>Get In touch</Button>
      </Container>
    </Section>
  );
};

export default GetStarted;
