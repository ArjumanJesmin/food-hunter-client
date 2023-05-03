import React from 'react';
import error from '../assets/error.avif'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={error} alt="404 Not Found" />
        </div>
    );
};

export default NotFound;