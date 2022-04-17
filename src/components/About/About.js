import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../Assets/Image/profile.png'

const About = () => {
    return (
        <Container>
            <Row xs={1} md={2} className='align-items-center'>
                <Col>
                    <img className='img-fluid' src={profile} alt="" />
                </Col>
                <Col>
                    <h3 className='mt-4 mt-md-0' style={{ color: '#CC8800' }}>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora, quia vero accusamus neque quidem incidunt similique enim obcaecati, aliquam porro mollitia, doloribus rem alias? Reprehenderit architecto quas vel enim temporibus accusamus ex adipisci odio, saepe, neque inventore recusandae sint?</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;