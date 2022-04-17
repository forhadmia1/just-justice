import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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

        </Container>
    );
};

export default PracticeArea;