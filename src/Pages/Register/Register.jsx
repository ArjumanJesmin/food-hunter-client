/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaRegSmile } from "react-icons/fa";
// import { AuthContext } from '../../providers/AuthProvider';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {
    const [error,setError] =useState('')
    // const {user, createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password= form.password.value;
        console.log(name, photo, email, password)

        // createUser(email,password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const createdUser = result.user
            console.log(createdUser)
            // form.reset()
        })
        .catch(error =>{
            console.log(error)
            setError('')
        })
    }

    return (
        <div className=' mx-auto border p-5 rounded my-5 bg-light' style={{ width: '35%' }}>
            <h2 className='tex-center py-2 text-primary'>Register <FaRegSmile /> </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photo" placeholder="Your Photo" name='photo' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Form.Text className="text-muted">

                </Form.Text>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br/>
                <Link className='m-2 ' to='/'><FaGoogle/></Link>
                <Link className='m-2 text-dark' to='/'><FaGithub/></Link>
                <p><small> You have all ready register? please <Link className='text-primary text-decoration-none' to='/login'>Login</Link></small></p>
            </Form>
            <div>
                
            </div>
        </div>
    );
};

export default Register;