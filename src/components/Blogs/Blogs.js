import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h1 className='text-center my-4'>Bolgs</h1>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>1. Difference between authorization and authentication?</Card.Title>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <p className='fw-bold'>Authentication:</p>
                                    <p>1. its verifies the user who he is.</p>
                                    <p>2. Authentication works through pin, password etc.</p>
                                    <p>3. Authentication is the first stem of  access management process.</p>
                                </div>
                                <div>
                                    <p className='fw-bold'>Athorization:</p>
                                    <p>1. its access the user what content he will see.</p>
                                    <p>2. Athorization work through settings.</p>
                                    <p>3. Athorization always take place after athentication.</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>2. Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <div>
                                <p>We are using firebase for authentication. Its provided by Google to manage users by implementing signup signing and other functionality.</p>
                                <p>There are many other option to implement authentication, Example:</p>
                                <ul>
                                    <li>Auth0</li>
                                    <li>Okta</li>
                                    <li>JSON Web Token</li>
                                    <li>Amazon Cognito</li>
                                    <li>Keycloak</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>3. What other services does firebase provide other than authentication?</Card.Title>
                            <div>
                                <p>Firebase provided defferent services other than authentication.</p>
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Authentication</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Cloud Messaging</li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Blogs;