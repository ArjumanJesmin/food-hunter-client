import React from 'react';
import { Col, Row } from 'react-bootstrap';

import shef1 from '../../assets/shef1.jpg'
import shef2 from '../../assets/shef2.jpg'
import shef3 from '../../assets/shef3.jpg'

const SectionTwo = () => {
    return (
        <div class=" text-white border shadow m-4 p-5 bg-dark ">
            <h2 className='text-center p-2'>Wonderful Moment</h2>
            <Row class=" d-flex ">
                <Col  xs={6} md={4} class=" align-self-start" >
                   <img style={{width:'100%'}} src= {shef1} alt=""  fluid/>
                </Col>
                <Col  xs={6} md={4} class=" align-self-center">
                    <img style={{width:'100%'}} src={shef2} alt=""  fluid/>
                </Col>
                <Col  xs={6} md={4} class=" align-self-end">
                    <img style={{width:'100%'}} src={shef3} alt=""  fluid />
                </Col>
            </Row>
        </div>
    );
};

export default SectionTwo;