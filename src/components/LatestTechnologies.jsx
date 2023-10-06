import React from 'react';
import styled from 'styled-components';

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
  width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 55px;
`;

const LatestTechnologies = () => {
  return (
    <Section>
      <Container>
        <Title>Technologies we love</Title>
      </Container>
    </Section>
  );
};

export default LatestTechnologies;
