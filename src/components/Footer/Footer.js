import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/Image/icon/facebook.png'
import linkedin from '../../Assets/Image/icon/linkedin.png'


const Footer = () => {
    return (
        <footer className='bg-dark py-2 pb-4 mt-5'>
            <Container className=' mt-2 mt-md-5'>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <h2 className='text-md-start text-center mb-3' style={{ color: '#CC8800' }}>Just Justice</h2>
                    </div>
                    <div className="col">
                        <div className="row row-cols-2 px-3">
                            <div className="col">
                                <ul className='p-0 mt-2 mt-md-5'>
                                    <li className=' list-unstyled fs-6'>
                                        <Link className='text-decoration-none text-white' to='/'>Home</Link>
                                    </li>
                                    <li className=' list-unstyled fs-6'>
                                        <Link className='text-decoration-none text-white' to='/blogs'>Blogs</Link>
                                    </li>
                                    <li className=' list-unstyled fs-6'>
                                        <Link className='text-decoration-none text-white' to='/about'>About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col text-white text-end">
                                <h3 style={{ color: '#CC8800' }}>Contact</h3>
                                <p>Email: Example@mail.com</p>
                                <p>Phone: +01717808752</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3">
                    <div className='order-2'>
                        <p><small className='text-white'>Allright reserved &copy; Devloper Forhad</small></p>
                    </div>
                    <div className='order-1 order-md-3 mb-4 mb-md-0'>
                        <div className='d-flex gap-5'>
                            <a href='https://www.facebook.com/Dr.ForhadHasan' target='_blank' rel="noreferrer noopener"><img height={40} src={facebook} alt="" /></a>
                            <a href='https://www.linkedin.com/in/md-forhad-mia-94b9781b6/' target='_blank' rel="noreferrer noopener"><img height={40} src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer >
    );
};

export default Footer;