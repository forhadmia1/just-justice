import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{question}</Card.Title>
                    <Card.Text>
                        {answer}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;