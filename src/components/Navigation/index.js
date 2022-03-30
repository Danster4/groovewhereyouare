import React from "react"

import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import logo from '../../logo.svg';



const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            Groove Where You Are
          </Navbar.Brand>
          
          {/* fix login button to be pushed a little the left */}
          <Button className="ms-auto pr-2 mr-3" variant="success">Login</Button>
          <Button className="m-3" variant="secondary">Signup</Button>
      
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      // g-2 is probably unnecessary - attempt to push login button to left
      className="g-2"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Groove Where You Are</Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body>
        
      <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="text-success" href="/">Home</Nav.Link>
          <Nav.Link className="text-success" href="/about-us">About Us</Nav.Link>
          <Nav.Link className="text-success" href="/contact-us">Contact Us</Nav.Link>
          <NavDropdown className="text-success" title="States" id="offcanvasNavbarDropdown">
            <NavDropdown.Item className="text-success" href="#action3">Alabama</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Arkansas</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="/FL">Florida</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="text-success" title="Cities" id="offcanvasNavbarDropdown2">
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action3">Tampa</NavDropdown.Item>
            <NavDropdown.Item className="text-success" href="#action4">Miami</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Button className="me-auto" variant="secondary">Signup</Button>
        </Nav>
        <NavDropdown.Divider />
        <Form className="d-flex pt-2">
          <FormControl
            type="search"
            placeholder="Username"
            className="me-2"
            aria-label="Search"
          />
          <FormControl
            type="search"
            placeholder="Password"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success">Login</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
  </Navbar>


  )
}

export default Navigation;