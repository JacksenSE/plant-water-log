import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './Logo.png';

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <br />
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/">
        <img
          src={logo}
          height="45"
          width="58"
          className="d-inline-block align-top"
          alt="My Logo"
        />
      </Navbar.Brand>
      
      <Nav className="me-auto justify-content-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#log">Watering Log</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#login">Log In/Log Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </>
    );
  }
}
