import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { url } from '../apis/config';
import Title from '../components/Title';
import Items from '../components/Items';

const ProductList = props => {
    const [ThemeArray, setThemeArray] = useState([]);
    const [productList, setproductList] = useState([]);

    const getTheme = () => {
        axios
            .get(`${usl}/theme/popular`)
            .then(response => setThemeArray(response.data.results));
    };

    const getProductList = () => {
        axios
            .get(`${url}/theme/1/products`)
            .them(response => setproductList(response.data.results));
    };

    useEffect( () => {
        getTheme();
        getProductList(0);
    }, []);

}

export default ProductList;