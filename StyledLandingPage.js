import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'main sidebar sidebar'
    'footer footer footer';
  grid-template-rows: 1fr 3fr 1fr;
`;

const Header = styled.header`
  grid-area: header;
  background: #333;
  color: white;
  text-align: center;
`;

const Main = styled.main`
  grid-area: main;
  background: lightblue;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background: lightgray;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: #333;
  color: white;
  text-align: center;
`;

const StyledLandingPage = () => {
  return (
    <Container>
      <Header>Landing Page Header</Header>
      <Main>Main Content</Main>
      <Sidebar>Sidebar</Sidebar>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default StyledLandingPage;
