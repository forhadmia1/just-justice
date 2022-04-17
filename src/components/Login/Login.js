import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignin from '../GoogleSignign/GoogleSignin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [error1, setError1] = useState('hi');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    useEffect(() => {
        if (error) {
            if (error.code === 'auth/user-not-found') {
                setError1('You dont have account? please register')
                return;
            } else if (error.code === 'auth/wrong-password') {
                setError1('Incorrect password')
                return;
            } else {
                setError1('something went wrong')
                return;
            }
        }
    }, [error]);

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4'>Login</h2>
                <form onSubmit={handleSignin}>
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Enter your password' required />
                    <p className='text-center text-danger'>{error && error1}</p>
                    <Button type='submit' className='w-100 mt-3'>Login</Button>
                </form>
                <button className='btn btn-link text-danger d-block mx-auto'>Forget password?</button>
                <p className='text-center mt-2 '><Link className='text-danger fw-bold text-decoration-none' to={'/register'}>Create an account?</Link></p>
                <GoogleSignin />
            </div >
        </div >
    );
};

export default Login;