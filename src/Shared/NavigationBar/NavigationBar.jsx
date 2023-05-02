/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Delicious Italian Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Name</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/login"><Button variant="outline-secondary">Login</Button></Link>
      </Container>
     
    </Navbar>
        </div>
    );
};

export default NavigationBar;