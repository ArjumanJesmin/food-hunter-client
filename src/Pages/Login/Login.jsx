/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaRegSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
      
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='w-25 mx-auto border p-5 rounded my-5 bg-light'>
            <h2 className='text-center text-primary py-2'>Login <FaRegSmile /> </h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">

                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p><small> You have no account? please <Link className='text-primary text-decoration-none' to='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;