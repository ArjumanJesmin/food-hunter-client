/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Row>
                <div className='bg-info border shadow p-5 m-5 rounded text-white'>
                    <h2>About us</h2>
                    <p>At Italian Food, we are dedicated to providing our customers with an exceptional culinary experience. Our team of experienced chefs and staff are committed to using only the highest quality ingredients to create dishes that are both delicious and visually stunning. Thank you for choosing Italian Food and allowing us to share our passion for food with you.</p>
                </div>
            </Row>
        </Container>
    );
};

export default About;