import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './Logo.png';

const styles = {
    color:"green"
  }

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
          height="55"
          width="68"
          className="d-inline-block align-top"
          alt="My Logo"
        />
      </Navbar.Brand>
      
      <Nav className="me-auto">
            <div>
                <Nav.Link href="#home"><button type="button" class="homeButton">
                <span class="glyphicon glyphicon-plus"></span>
                Home
                </button></Nav.Link>
            </div>
            <div>
                <Nav.Link href="#log"><button type="button" class="wateringLog">
                <span class="glyphicon glyphicon-plus"></span>
                Watering Log
                </button></Nav.Link>
            </div>
            <div>
                <Nav.Link href="#features"><button type="button" class="aboutUs">
                About Us
                </button></Nav.Link>
            </div>
            <div>
                <Nav.Link href="#login"><button type="button" class="LogIn">
                Log In/Out
                </button></Nav.Link>
            </div>
            </Nav>
          </Container>
        </Navbar>
       
        
      </>
    );
  }
}

