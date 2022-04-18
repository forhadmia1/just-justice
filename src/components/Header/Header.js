import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: '#CC8800' }} className='fw-bold fs-3'>Just Justice</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4 align-items-center">
                        <CustomLink className="text-decoration-none" to="/">Home</CustomLink>
                        <CustomLink className="text-decoration-none" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="text-decoration-none" to="/about">About</CustomLink>
                        {!user?.emailVerified ?
                            <CustomLink className="text-decoration-none" to="login">Login</CustomLink>
                            :
                            <button onClick={handleSignout} className='btn btn-link text-white text-decoration-none'>SignOut</button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;