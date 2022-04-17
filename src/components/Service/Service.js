import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, text, price, id } = service;
    const navigate = useNavigate();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price: {price}</h4>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button onClick={() => navigate(`/service/${id}`)}>Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;