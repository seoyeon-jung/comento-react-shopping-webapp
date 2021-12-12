import React from 'react';
import styled from 'styled-components';

const Items = ( { Items }) => {
    const { product_thumbnail, product_name, product_detail } = Items;
    return (
        <ProductItem>
            <ProductThumbnail 
                style={{ backgroundImage: `url(${product_thumbnail})` }} />
            <ProductName>
                { product_name }
            </ProductName>
            <ProductDetail>
                { product_detail }
            </ProductDetail>
        </ProductItem>
    );
};

export default ProductItem;