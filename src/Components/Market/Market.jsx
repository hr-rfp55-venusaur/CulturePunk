import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ProductView from './ProductView';

import productData from './productData';

/*
To be updated once API is connected
const getProductList = (offset) => axios.get(`/products?offset=${offset}&limit=20`);

// API url: `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=20`);

*/

function Market() {
  const [productList, updateProductList] = useState(productData.assets);
  /*

  To be updated oonce API is connected

  //   const [productList, updateProductList] = useState([]);
  //   const [offset, updateOffset] = useState(0);

  useEffect(() => {
    getProductList(offset)
      .then((data) => console.log(data))
      .then((products) => updateProductList(...productList, products))
      .catch((error) => console.log(error));
  });

  */

  return (
    <div>
      Nav bar goes here!
      <h1>Gallery</h1>
      <ProductView productList={productList} />
    </div>
  );
}

export default Market;

/*

const Market = () => (
  <div>
    <h1>Gallery</h1>
    <ProductView />
  </div>
);

*/
