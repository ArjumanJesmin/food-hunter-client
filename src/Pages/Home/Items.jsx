import React, { useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Items = () => {
    const data = useLoaderData();
    const { recipes } = data

    const [accepted, setAccepted] = useState(false)
   
    const handleAccepted = () =>{
        setAccepted(true)
        toast.success(' WOW   I Like it! ');
    }

    return (
        <Container >
            <CardGroup className='m-4 gap-3'>
                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[0].img} />
                    <Card.Body>
                        <Card.Title> Name: {recipes[0].name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[0].ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[0].rating} </Card.Text>
                        <Card.Text>Method: {recipes[0].method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAccepted} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[1].img} />
                    <Card.Body>
                        <Card.Title> Name: {recipes[1].name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[1].ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[1].rating} </Card.Text>
                        <Card.Text> Method: {recipes[1].method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAccepted} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[0].img} />
                    <Card.Body>  
                        <Card.Title> Name: {recipes[2].name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[2].ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[2].rating} </Card.Text>
                        <Card.Text> Method: {recipes[2].method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAccepted} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </CardGroup>
            <ToastContainer />
        </Container>
    );
};

export default Items;