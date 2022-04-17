import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Practice = ({ practice }) => {
    const { name, picture, text } = practice;
    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={picture} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Practice;