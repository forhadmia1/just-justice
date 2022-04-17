import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, picture, text, price, id } = service;
    const navigate = useNavigate();
    return (
        <Col>
            <Card className='shadow-lg card-container'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='fs-4'>{name}</Card.Title>
                    <h6>Price: {price}</h6>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <button className='d-block mx-auto service-btn rounded-pill' onClick={() => navigate(`/service/${id}`)}>Book Now <FontAwesomeIcon icon={faArrowRight} /></button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;