import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../Assets/Image/google-logo.png'
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        signInWithGoogle()
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='d-flex justify-content-center mt-4'>
            <Button onClick={googleSignIn} className='btn-light btn-outline-danger px-4'>
                <img className='me-3' height={30} src={googleLogo} alt="" />
                SignIn with Google
            </Button>
        </div>
    );
};

export default GoogleSignin;