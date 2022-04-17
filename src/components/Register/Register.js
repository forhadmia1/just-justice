import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignin from '../GoogleSignign/GoogleSignin';

const Register = () => {
    const createNewUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4'>Register</h2>
                <form onSubmit={createNewUser}>
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