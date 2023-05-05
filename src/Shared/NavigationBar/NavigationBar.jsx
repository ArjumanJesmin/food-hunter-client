/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

import '../NavigationBar/NavigationBar.css'

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const [active, setActive] = useState('home');
  const [hovering, setHovering] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const handleNavClick = (NavLink) => {
    setActive(NavLink);
    console.log(NavLink)
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className='py-4'>
        <Container>
          <Navbar.Brand to="/">Delicious Italian Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-3">
              <NavLink onClick={() => handleNavClick('home')} className={`text-decoration-none text-dark nav-link ${active === 'home' ? 'active' : ''}`} to="/" >Home</NavLink>

              <NavLink className={`text-decoration-none text-dark nav-link ${active === 'about' ? 'active' : ''}`} to="/about" onClick={() => handleNavClick('about')} >About</NavLink>

              <NavLink onClick={() => handleNavClick('blog')} className={`text-decoration-none text-dark nav-link ${active === 'blog' ? 'active' : ''}`} to="/blog" >Blog</NavLink>
            </Nav>
          </Navbar.Collapse>

          {user && <Nav.Link href="#deets" className={hovering ? "user-hover" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> <FaUserCircle style={{ fontSize: '2rem' }} />  {user.displayName}</Nav.Link>}

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