import React from "react";
import styled from "styled-components";

const ProductItems = ({ Items }) => {
  const { product_thumbnail, product_name, product_detail } = Items;
  return (
    <ProductItem>
      <ProductThumbnail
        style={{
          backgroundImage: `url(${product_thumbnail})`,
        }}
      />
      <ProductName>{product_name}</ProductName>
      <ProductDetail>{product_detail}</ProductDetail>
    </ProductItem>
  );
};

export default ProductItems;

const ProductItem = styled.div``;
const ProductThumbnail = styled.div`
  height: 200px;
  width: 300px;
  backgroundsize: cover;
  backgroundposition: center;
`;
const ProductDetail = styled.div``;
const ProductName = styled.div``;
