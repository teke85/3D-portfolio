import React from 'react';
import styled from 'styled-components';

const data = [
  'Web Design (Figma)',
  'Web Development',
  'Digital Marketing',
  'Email Marketing',
  'Product Design',
  'Social Media Management',
  'Graphic Design'
];

const Section = styled.div`
  height: 100vh;
  background-color: #fff3;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  scroll-snap-align: center;
  padding: 0 2rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  list-style-type: none;
  border-bottom: 1px solid #fff;
  &:hover {
    color: #42c6f0;
  }
`;

const Services = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
      </Container>
    </Section>
  );
};

export default Services;
