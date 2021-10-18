// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductView from './ProductView';

const getProductList = (offset, limit) => axios.get(`http://localhost:3001/products?offset=${offset}&limit=${limit}`);

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: [],
    offset: 0,
    limit: 6,
  });

  const [needsData, toggleNeedsData] = useState(true);

  useEffect(() => {
    getProductList(productListData.offset, productListData.limit)
      .then((res) => {
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
