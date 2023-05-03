/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='py-4'>
        <Container>
          <Navbar.Brand to="/home">Delicious Italian Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-3">
              <Link className='text-decoration-none text-dark' to="/about">About</Link>
              <Link className='text-decoration-none text-dark' to="/home">Home</Link>
              <Link className='text-decoration-none text-dark' to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/login"><Button variant="outline-secondary">Login</Button></Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;