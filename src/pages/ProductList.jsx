import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { url } from "../apis/config";
import { render } from "@testing-library/react";
import ProductItems from "../components/ProductItems";

const ProductList = (props) => {
  const [ThemeArray, setThemeArray] = useState([]);
  const [productList, setproductList] = useState([]);
  const [product] = useState({
    product_thumbnail:
      "http://cdn6-kinx.makeshop.co.kr/shopimages/zizhel/0790010001043.jpg?1589522074",
    product_name: "도트백",
    product_detail: "만년인기",
  });

  const getTheme = () => {
    axios
      .get(`${url}/theme/popular`)
      .then((response) => setThemeArray(response.data.results));
  };

  const getProductList = () => {
    axios
      .get(`${url}/theme/1/products`)
      .them((response) => setproductList(response.data.results));
  };

  useEffect(() => {
    // getTheme();
    // getProductList(0);
  }, []);

  return (
    <div>
      <h1>테마 </h1>
      <ProductItems Items={product} />
    </div>
  );
};

export default ProductList;
