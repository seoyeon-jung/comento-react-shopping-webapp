import React from 'react';
import { Link } from 'react-router-dom';

const Lists = props => {
    return (
        <div className="Lists">
            <li>
                <Link to="/">
                    ProductList
                </Link>
            </li>
            <li>
                <Link to="/productDetail">
                    ProductDetail
                </Link>
            </li>
            <li>
                <Link to="/list">
                    Lists
                </Link>
            </li>
            <p>
                Lists
            </p>
        </div>
    );
};

export default Lists;