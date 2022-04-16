import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4">
                        <CustomLink className="text-decoration-none" to="/">Home</CustomLink>
                        <CustomLink className="text-decoration-none" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="text-decoration-none" to="/about">About</CustomLink>
                        <CustomLink className="text-decoration-none" to="login">Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;