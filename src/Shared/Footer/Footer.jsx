/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-5">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <h5>Follow us</h5>
            <ul className="list-unstyled">
              <li><Link to="https://twitter.com">Twitter</Link></li>
              <li><Link to="https://facebook.com">Facebook</Link></li>
              <li><Link to="https://instagram.com">Instagram</Link></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h5>About us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien nec velit euismod molestie.</p>
          </Col>
          <Col xs={12} sm={6} md={4} >
            <h5>Contact us</h5>
            <ul className="list-unstyled ">
              <li>123 Main St.</li>
              <li>Anytown, USA 12345</li>
              <li>(123) 456-7890</li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </Col>
        </Row>
    </footer>
    )
};

export default Footer;
