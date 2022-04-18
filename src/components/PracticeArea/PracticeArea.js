import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Practice from '../Practice/Practice';
import './PracticeArea.css'

const PracticeArea = () => {
    const [practices, setPractices] = useState([]);
    useEffect(() => {
        fetch('practicedata.json')
            .then(res => res.json())
            .then(data => setPractices(data))
    }, [])
    return (
        <Container className='mt-5'>
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon className='tool-icon' icon={faToolbox} />
                <h1>My Practice Areas</h1>
            </div>
            <p className='mt-4 fs-5'>I am experienced in all major areas of Criminal Defense. Provide our clients with the highest quality legal representation when it matters most. If you are accused of committing a crime, you will need the very best criminal defense Lawyer.I am specially skilled in the following practice areas:</p>
            <Row xs={1} md={4} className="g-4 mt-3">
                {
                    practices.map(practice => <Practice
                        key={practice.id}
                        practice={practice}
                    ></Practice>)
                }
            </Row>
        </Container>
    );
};

export default PracticeArea;