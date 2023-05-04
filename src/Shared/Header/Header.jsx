/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import banner1 from '../../assets/banner1.jpg'
import ChefGroup from './ChefGroup';
import SectionOne from '../../Pages/About/SectionOne';
import SectionTwo from '../../Pages/About/SectionTwo';



const Header = () => {

  const jumbotronStyle = {
    backgroundImage: `url(${banner1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: '#fff',
    textShadow: '1px 1px 1px #000',
    height: '500px',
    width: '100%',
    objectFit: 'cover',
    opacity: '0.8',
  };
  return (

    <>
      <div style={jumbotronStyle}>
          <Container className='text-center p-5'>
              <h1 className='m-4'>Savoring the Flavors of Italy: A Culinary Journey Through Its Delicious Cuisine</h1>
              <p>Italian cuisine is one of the most popular and beloved in the world, renowned for its rich flavors, fresh ingredients, and timeless traditions. From classic dishes like spaghetti carbonara and lasagna to regional specialties such as Neapolitan pizza and Sicilian cannoli, Italian food offers a truly diverse and mouth-watering culinary experience.</p>
          </Container>
      </div>
      
      <ChefGroup />
      <SectionOne/>
      <SectionTwo/>
    </>
  );
};

export default Header;