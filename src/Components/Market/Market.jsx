import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ProductView from './ProductView';

import productData from './productData';

const getProductList = (offset) => axios.get(`https://localhost:3001/products?offset=${offset}&limit=${limit}`);

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: productData.assets,
    offset: 0,
    limit: 6,
  });
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
      <ProductView productList={productListData.productList} />
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
