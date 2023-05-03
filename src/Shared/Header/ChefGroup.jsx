/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleShefCard from './SingleShefCard';
import { Col, Container, Row } from 'react-bootstrap';

function ChefGroup() {

    const [allShef, setAllShef] = useState([]);

    useEffect(() => {
        fetch('https://shef-sarver-side-arjumanjesmin.vercel.app/allData')
            .then(res => res.json())
            .then(data => setAllShef(data))
    }, [])

    return (
        <Container>
            <Row className='gap-5 my-5'>
               
               {allShef.map(shef =><SingleShefCard
                        shef={shef}
                        key={shef.id}
                    />)
                }
              
            </Row>
        </Container>
    );
}

export default ChefGroup;