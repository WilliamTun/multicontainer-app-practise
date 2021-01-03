import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I am another page and this section is in a different part of code than the above.
            <br/>
            <Link to="/"> Go Back Home </Link>
        </div>
    );
};