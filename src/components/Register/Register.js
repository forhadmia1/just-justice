import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignin from '../GoogleSignign/GoogleSignin';

const Register = () => {
    const [errormsg, setErrormsg] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const createNewUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password.length < 6) {
            setErrormsg('Password is too short!')
            return;
        }

        if (password !== confirmPassword) {
            setErrormsg("password didn't match?")
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        navigate('/')

    }

    console.log(user)
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='from-container'>
                <h2 className='text-center mb-4 title'>Register</h2>
                <form onSubmit={createNewUser}>
                    <input type="text" name="name" placeholder='Name' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Password' required />
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' required />
                    <p className='text-center text-danger'>{errormsg}</p>
                    <button type='submit' className='rounded w-100 mt-3 submit-btn fw-bold'>Register</button>
                </form>
                <p className='text-center mt-4 '><Link className='text-danger fw-bold text-decoration-none' to={'/login'}>Already have an account?</Link></p>
                <GoogleSignin />
            </div>
        </div>
    );
};

export default Register;