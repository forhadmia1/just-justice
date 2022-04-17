import React from 'react';
import errorImage from '../../Assets/Image/404-page.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={errorImage} alt="Page not found" />
        </div>
    );
};

export default NotFound;