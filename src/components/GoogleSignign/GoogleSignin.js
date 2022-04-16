import React from 'react';
import { Button } from 'react-bootstrap';
import googleLogo from '../../Assets/Image/google-logo.png'

const GoogleSignin = () => {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Button className='btn-light btn-outline-danger px-4'>
                <img className='me-3' height={30} src={googleLogo} alt="" />
                SignIn with Google
            </Button>
        </div>
    );
};

export default GoogleSignin;