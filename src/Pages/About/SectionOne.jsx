import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import one from '../../assets/one.jpg'

const SectionOne = () => {
    return (
        <Container className='border bg-light mb-5 shadow'>
             <h1 className='text-center py-2 text-secondary'>Spacial Food</h1>
            <Row className='gap-2 my-5'>
                <Col>
                <img style={{width:'100%'}} className='rounded' src={one} alt="" />
                 </Col>
                
                <Col>
                <h2 >Burger</h2>
                <p>A burger is a popular sandwich that typically consists of a meat patty (usually beef) that is cooked and served between two buns with various toppings and condiments. The patty is usually seasoned with salt and pepper and can be cooked to a desired level of doneness, such as rare, medium, or well-done. The burger can be topped with a variety of ingredients, such as cheese, lettuce, tomato, onion, pickles, bacon, avocado, and more. Condiments such as ketchup, mustard, mayonnaise, and special sauces are also commonly added to enhance the flavor of the burger. Burgers can be served with a side of fries, onion rings, or other side dishes, and are a popular food item at fast food chains, diners, and restaurants around the world. There are also vegetarian and vegan versions of burgers that use plant-based ingredients such as black beans or mushrooms instead of meat..</p>
                 </Col>
            </Row>
        </Container>
    );
};

export default SectionOne;