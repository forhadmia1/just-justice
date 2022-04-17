import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignin from '../GoogleSignign/GoogleSignin';
import './Login.css'

const Login = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4'>Login</h2>
                <form action="">
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name="password" id="" placeholder='Enter your password' required />
                    <Button className='w-100 mt-3'>Login</Button>
                </form>
                <button className='btn btn-link text-danger d-block mx-auto'>Forget password?</button>
                <p className='text-center mt-2'><Link className='text-danger fw-bold text-decoration-none' to={'/register'}>Create an account?</Link></p>
                <GoogleSignin />
            </div >
        </div >
    );
};

export default Login;