import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Link } from 'react-router-dom';
import Contact from '../components/Contact';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  font-weight: 500;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 100px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const ListItem = styled.li`
  font-weight: 700;
  &:hover {
    color: #42c6f0;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
`;

const Icon = styled.img``;

const Button = styled.button`
  width: 9.5rem;
  height: 2.4rem;
  background-color: #42c6f0;
  cursor: pointer;
  border: 0;
  color: #fff;
  font-weight: 700;
`;

const WhiteButton = styled.button`
  width: 9.5rem;
  height: 2.4rem;
  background-color: #fff;
  cursor: pointer;
  border: 0;
  color: #000;
  font-weight: 700;
  &:hover {
    background-color: #fff9;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>
              <Link>Work</Link>
            </ListItem>
            <ListItem>
              <Link>Services</Link>
            </ListItem>
            <ListItem>
              <Link>Collaborate</Link>
            </ListItem>
            <ListItem>Company</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.svg" />
          <Button>Hire Us</Button>
          <WhiteButton>
            <Link to="/contact">Contact Us</Link>
          </WhiteButton>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
