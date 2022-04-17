import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Just Justice</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4 align-items-center">
                        <CustomLink className="text-decoration-none" to="/">Home</CustomLink>
                        <CustomLink className="text-decoration-none" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="text-decoration-none" to="/about">About</CustomLink>
                        {!user ?
                            <CustomLink className="text-decoration-none" to="login">Login</CustomLink>
                            :
                            <button className='btn btn-link text-white text-decoration-none'>SignOut</button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;