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
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
  width: 1200px;
`;

const Title = styled.h3`
  font-size: 4rem;
  color: #42c6f0;
`;

const Span = styled.span``;

const Col = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 2fr 3fr;
`;

const ColOne = styled.div``;

const ColTwo = styled.div``;

const ColThree = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #fff;
  justify-content: center;
  align
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: #42c6f0;
  }
`;

const ListItemTitle = styled.li`
  color: #42c6f0;
  font-size: 15px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 100px;
`;

const Paragraph = styled.p`
  padding: 0 20px;
  font-size: 15px;
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <Title>TALK TO US</Title>
        <span>Hello@tekmucreations.tech</span>
        <Col>
          <ColOne>
            <List>
              <ListItemTitle>AGENCY</ListItemTitle>
              <ListItem>Case studies</ListItem>
              <ListItem>Team</ListItem>
              <ListItem>Approach</ListItem>
              <ListItem>FAQs</ListItem>
              <ListItem>Insights</ListItem>
              <ListItem>Hire us</ListItem>
              <ListItem>Join our team</ListItem>
            </List>
          </ColOne>
          <ColTwo>
            <List>
              <ListItemTitle>SOLUTIONS</ListItemTitle>
              <ListItem>Websites</ListItem>
              <ListItem>Ecommerce</ListItem>
              <ListItem>Custom software</ListItem>
              <ListItem>Branding</ListItem>
              <ListItem>Growth marketing</ListItem>
              <ListItem>Search engine optimization</ListItem>
              <ListItem>Blog</ListItem>
            </List>
          </ColTwo>
          <ColThree>
            <Logo src="./img/logo.png" />
            <Paragraph>
              Want to get in touch? We would love to hear from you!
              <br />
              <br />
              <strong>Email: </strong>hello@tekmucreations.tech
              <br />
              <br />
              ©2023 TekmuCreations.
            </Paragraph>
          </ColThree>
        </Col>
      </Container>
    </Section>
  );
};

export default Footer;
