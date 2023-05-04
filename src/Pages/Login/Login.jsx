/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaRegSmile } from 'react-icons/fa';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)

        if (password.length < 6) {
            setError(' please At least one special character!')
            return
        }

        //signIn(email, password) ---------------------
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Google Sign in--------------------
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Navigate(from, {replace:true})

            })
            .catch(error => console.log(error.message))
    }

    //Github Sign In ------------------------
    const handleGithubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
            })
            .catch(error => console.log(error.message))
    }

    // -------------------------------------------------------

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

                <Button className='m-3' variant="primary" type="submit">Login</Button>

                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='m-2 '><FaGoogle /></Button>

                <Button onClick={handleGithubSignIn} variant="outline-primary" className='text-dark'><FaGithub /></Button>

                <p><small> You have no account? please <Link className='text-primary text-decoration-none' to='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;