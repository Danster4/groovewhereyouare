import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import logo from '../../logo.svg';


const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="justify-content-between"
          />{' '}
            Groove Where You Are
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Footer;