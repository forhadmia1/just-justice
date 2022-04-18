import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import thumb_pic from '../../Assets/Image/my-pic-1.png'

const About = () => {
    return (
        <Container className='mt-3 mt-md-5'>
            <Row xs={1} md={2} className='align-items-center'>
                <Col>
                    <img className='img-fluid bg-info rounded' src={thumb_pic} alt="" />
                </Col>
                <Col>
                    <div className='p-2'>
                        <h3 className='mt-4 mt-md-0' style={{ color: '#CC8800' }}>Md Forhad Hasan</h3>
                        <p className='fs-5'> My goal is to become a successful web developer. I believe to work hard to get success. without pain, no one can succeed in life. I will work hard and determine myself to become successful. and continue learning to achieve the goal. Until I achieve my goal I will keep working, because it's my passion.</p>
                        <button className='border-0 text-white px-4 py-2 rounded-pill' style={{ backgroundColor: '#CC8800 ' }}>View Resume</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;