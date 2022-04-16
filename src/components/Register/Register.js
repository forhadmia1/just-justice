import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignin from '../GoogleSignign/GoogleSignin';

const Register = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4'>Register</h2>
                <form action="">
                    <input type="text" name="name" id="" placeholder='Name' required />
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                    <Button className='w-100 mt-3'>Login</Button>
                </form>
                <p className='text-center mt-4 '><Link className='text-danger fw-bold text-decoration-none' to={'/login'}>Already have an account?</Link></p>
                <GoogleSignin />
            </div>
        </div>
    );
};

export default Register;