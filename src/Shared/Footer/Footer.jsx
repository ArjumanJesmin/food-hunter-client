/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h5>Follow us</h5>
          <ul className="list-unstyled ">
            <li><Link className='text-decoration-none text-white' to="/https://twitter.com"> <FaTwitter /> Twitter  </Link></li>
            <li><Link className='text-decoration-none text-white' to="/https://facebook.com"> <FaFacebook />  Facebook  </Link></li>
            <li><Link className='text-decoration-none text-white' to="https://instagram.com"> <FaInstagram /> Instagram </Link></li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h5>About us</h5>
          <p>At  Italian Food, we are dedicated to providing our customers with an exceptional culinary experience. Our team of experienced chefs and staff are committed to using only the highest quality ingredients to create dishes that are both delicious and visually stunning. Thank you for choosing  Italian Food and allowing us to share our passion for food with you.".</p>
        </Col>
        <Col xs={12} sm={6} md={4} >
          <h5>Contact us</h5>
          <ul className="list-unstyled ">
            <li>123 Main St.</li>
            <li>Anytown, USA 12345</li>
            <li>(123) 456-7890</li>
            <li><Link className='text-decoration-none text-white' to="mailto:info@example.com">info@example.com</Link></li>
          </ul>
        </Col>
      </Row>
    </footer>
  )
};

export default Footer;
