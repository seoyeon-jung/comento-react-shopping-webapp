import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { url } from '../apis/config';

const ProductDetail = props => {
    const [productDetail, setProductDetail] = useState({});

    function getProductDetail () {
        axios
            .get(`${url}/1`)
            .then(response => setProductDetail(response.data.results));
    }

    useEffect(getProductDetail, []);
    console.log(productDetail);
}

export default ProductDetail;