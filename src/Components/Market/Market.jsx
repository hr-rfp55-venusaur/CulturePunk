import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProductView from './ProductView';
import Sort from './Sort';

const getProductList = (offset, limit, order, direction) => (
  axios.get(`http://localhost:3001/products?offset=${offset}&limit=${limit}&order_by=${order}&order_direction=${direction}`)
);

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: [],
    offset: 0,
    limit: 6,
    isFirstLoad: true,
  });
  const [sortValue, setSortValue] = React.useState('sale_date');
  const [direction, setDirection] = React.useState('desc');

  const updateProductList = () => (
    // axios.get(`http://localhost:3001/products?offset=${productListData.offset}&limit=${productListData.limit}`)

    getProductList(productListData.offset, productListData.limit, sortValue, direction)
      .then((res) => {
        // console.log('updateProductList + getProductList', res.data)
        updateProductListData({
          productList: [...productListData.productList.concat(res.data)],
          offset: productListData.offset + productListData.limit,
          limit: 6,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  );

  useEffect(() => {
    getProductList(0, productListData.limit, sortValue, direction)
      .then((res) => {
        // console.log('useEffect, sortValue', sortValue, res.data);
        updateProductListData({
          productList: res.data,
          offset: productListData.limit,
          limit: 6,
        });
      });
  }, [sortValue, direction]);

  // useEffect(() => {
  //   getProductList(0, productListData.limit, sortValue, direction)
  //     .then((res) => {
  //       // console.log('useEffect, direction', direction, res.data)
  //       updateProductListData({
  //         productList: res.data,
  //         offset: productListData.limit,
  //         limit: 6,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [direction]);

  React.useEffect(() => {
    updateProductList();
  }, [productListData.isFirstLoad]);

  return (
    <div className="market-page">
      <header className="market-header">
        Nav bar goes here!
        <h1> Gallery </h1>
      </header>
      <Sort setSortValue={setSortValue} setDirection={setDirection} />
      <div className="market-product-list-container">
        <ProductView productList={productListData.productList} />
        <Fab color="primary" aria-label="add" size="small" onClick={updateProductList}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Market;
