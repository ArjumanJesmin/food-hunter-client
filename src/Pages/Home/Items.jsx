import React, {  useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Items = () => {
    const data = useLoaderData();
    const { recipes } = data

    const [accepted, setAccepted] = useState(false)

    const handleAcceptedOne = () => {
        setAccepted(true)
        toast.success(' WOW   I Like it! ');
    }
    const handleAcceptedTwo = () => {
        setAccepted(true)
        toast.success(' WOW   Good Choice! ');
    }
    const handleAcceptedThree = () => {
        setAccepted(true)
        toast.success(' WOW   You are Lucky! ');
    }

    return (
        <Container >
            <CardGroup className='m-4 gap-3'>
                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[0]?.img} />
                    <Card.Body>
                        <Card.Title> Name: {recipes[0]?.name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[0]?.ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[0]?.rating} </Card.Text>
                        <Card.Text>Method: {recipes[0]?.method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAcceptedOne} variant="primary">Favorite button</Button>
                    </Card.Body>
                </Card>

                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[1]?.img} />
                    <Card.Body>
                        <Card.Title> Name: {recipes[1].name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[1].ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[1].rating} </Card.Text>
                        <Card.Text> Method: {recipes[1].method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAcceptedTwo} variant="primary">Favorite button</Button>
                    </Card.Body>
                </Card>

                <Card className="text-center mx-auto my-5">
                    <h2 className='pt-2'></h2>
                    <Card.Img className='p-2' variant="top" src={recipes[2]?.img} />
                    <Card.Body>
                        <Card.Title> Name: {recipes[2].name}</Card.Title>
                        <Card.Text> Ingredients: {recipes[2].ingredients} </Card.Text>
                        <Card.Text> Rating: {recipes[2].rating} </Card.Text>
                        <Card.Text> Method: {recipes[2].method} </Card.Text>
                        <Button disabled={accepted} onClick={handleAcceptedThree} variant="primary">Favorite button</Button>
                    </Card.Body>
                </Card>

            </CardGroup>
            <ToastContainer />
           <div className=' text-center my-3'><Link  to='/'><Button variant="dark" >Return Home</Button></Link></div>
        </Container>
    );
};

export default Items;