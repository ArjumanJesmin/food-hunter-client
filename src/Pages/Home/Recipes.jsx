import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Items from './Items';

const Recipes = () => {
    const data = useLoaderData();
    const {image,id, name,recipes,like,description} = data 
    return (
        <>
            <Container>
                <Card className="text-center mx-auto my-5" style={{ width: '44rem' }}>
                    <h2 className='pt-2'>{name}</h2>
                    <Card.Img className='p-2' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>Description: {description} </Card.Text>
                        <Card.Text>Like: {like} </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Items/>
        </>
    );
};

export default Recipes;