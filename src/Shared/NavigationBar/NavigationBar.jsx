/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

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

          {user && <Nav.Link href="#deets"> <FaUserCircle style={{ fontSize: '2rem' }} /> {user.displayName}</Nav.Link>}

          {
            user ? <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
              <Link to='/login'><Button variant="secondary">Login</Button></Link>
          }
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;