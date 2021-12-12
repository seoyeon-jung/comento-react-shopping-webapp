import React from 'react';
import { Link } from 'eact-router-dom';

const Error = () => {
    return (
        <div className="Error">
            <h1>
                404 Not Found
            </h1>
            <li>
                <Link to="/productDetail">
                    ProductDetail
                </Link>
            </li>
            <li>
                <Link to="/lists">
                    Lists
                </Link>
            </li>
        </div>
    );
};

export default Error;