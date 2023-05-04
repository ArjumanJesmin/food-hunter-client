import React, { useState } from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = () => {
    const data = useLoaderData();
    const [accepted, setAccepted] = useState(false)
    const {image, name,like,description} = data ;

    const handleAccepted = () =>{
        setAccepted(true)
        toast.success('Thank You So Much!');
    }

    return (
        <>
            <Container>
                <Card  className="text-center mx-auto my-5" style={{ width: '44rem' }}>
                    <h2 className='pt-2'>{name}</h2>
                    <Card.Img className='p-2' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>Description: {description} </Card.Text>
                        <Card.Text>Like: {like} </Card.Text>
                        <Button  disabled={accepted} onClick={handleAccepted} variant="danger">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <ToastContainer />
            </Container>
            <Items/>
        </>
    );
};

export default Recipes;