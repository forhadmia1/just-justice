import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignin from '../GoogleSignign/GoogleSignin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const [error1, setError1] = useState('hi');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //sign in handle
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true })
    }
    //error handle for login
    useEffect(() => {
        if (error) {
            if (error.code === 'auth/user-not-found') {
                setError1('You dont have account? please register')
                return;
            } else if (error.code === 'auth/wrong-password') {
                setError1('Incorrect password')
                return;
            } else {
                setError1('something went wrong, Try again!')
                return;
            }
        }
    }, [error]);
    //password reset 
    const emailRef = useRef('');

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (!email) {
            toast('Please enter an email!!')
            return;
        } else {
            await sendPasswordResetEmail(email)
            toast('Email sent successfully!')
        }

    }


    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4'>Login</h2>
                <form onSubmit={handleSignin}>
                    <input ref={emailRef} type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Enter your password' required />
                    <p className='text-center text-danger'>{error && error1}</p>
                    <Button type='submit' className='w-100 mt-3'>Login</Button>
                </form>
                <button onClick={passwordReset} className='btn btn-link text-danger d-block mx-auto mt-2'>Forget password?</button>
                <p className='text-center mt-2 '><Link className='text-danger fw-bold text-decoration-none' to={'/register'}>Create an account?</Link></p>
                <GoogleSignin />
                <ToastContainer />
            </div >
        </div >
    );
};

export default Login;