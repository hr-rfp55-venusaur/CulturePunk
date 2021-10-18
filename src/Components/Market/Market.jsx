// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductView from './ProductView';

import productData from './productData';

const getProductList = (offset, limit) => axios.get(`http://localhost:3001/products?offset=${offset}&limit=${limit}`);

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: [],
    offset: 0,
    limit: 6,
  });

  const [needsData, toggleNeedsData] = useState(true);
  /*

  To be updated oonce API is connected

  //   const [productList, updateProductList] = useState([]);
  //   const [offset, updateOffset] = useState(0);

  */
  useEffect(() => {
    getProductList(productListData.offset, productListData.limit)
      .then((res) => {
        console.log(res.data);
        updateProductListData({
          productList: productListData.productList.concat(res.data),
          offset: productListData.offset + 1,
          limit: 6,
        });
        toggleNeedsData(false);
      })
      .catch((error) => console.log(error));
  }, [needsData]);

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
