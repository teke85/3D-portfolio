import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const Container = styled.div`
  display: flex;
  flexwrap: wrap;
`;

const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  width: 50%;
  font-size: 2.3rem;
  padding: 0 20px;
`;

const ColumnLeft = styled.div`
  display: flex;
  background: url('./img/1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  width: 40%;
`;

const Banner = () => {
  return (
    <Section>
      <Container>
        <ColumnRight>
          Our primary objective is to meet the unique requirements of businesses
          within the hospitality sector, including lodges and hotels.
        </ColumnRight>
        <ColumnLeft></ColumnLeft>
      </Container>
    </Section>
  );
};

export default Banner;
