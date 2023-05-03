import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleShefCard = ({shef}) => {

   const {image,name,years_of_experience,like} = shef;
    return (
        <Col xs={12} sm={2} md={3}>
          <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> Title: {name}</Card.Title>
                    <Card.Text>
                     Experience: {years_of_experience}
                    </Card.Text>
                    <Card.Text>
                      Like:  {like}
                    </Card.Text>
                   <Link to='/about'><Button variant="dark">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleShefCard;