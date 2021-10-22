import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProductView from './ProductView';
import Sort from './Sort';
import ExpandableCarousel from '../Home/ExpandableCarousel';

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

  const updateProductList = () => {
    if (productListData.isFirstLoad) {
      updateProductListData({
        productList: [],
        offset: 0,
        limit: 6,
      });
    } else {
      getProductList(productListData.offset, productListData.limit, sortValue, direction)
        .then((res) => {
          updateProductListData({
            productList: [...productListData.productList.concat(res.data)],
            offset: productListData.offset + productListData.limit,
            limit: 6,
          });
        })
        .catch((error) => (error));
    }
  };

  useEffect(() => {
    if (!productListData.isFirstLoad) {
      getProductList(0, productListData.limit, sortValue, direction)
        .then((res) => {
          updateProductListData({
            productList: res.data,
            offset: productListData.limit,
            limit: 6,
          });
        })
        .catch((error) => error);
    }
  }, [sortValue, direction]);

  React.useEffect(() => {
    updateProductList();
  }, [productListData.isFirstLoad]);

  return (
    <div className="market-page">
      <header className="market-header" />
      <div className="market-headers">
        <h1 className="market-title-brand">.Culture.Punk.</h1>
        <h2 className="market-title-page">
          N.F.T.
          <br />
          Art
          <br />
          Gallery
        </h2>
      </div>
      <Sort setSortValue={setSortValue} setDirection={setDirection} />
      <div
        className="market-carousel-container"
        style={{
          display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', overflow: 'hidden',
        }}
      >
        <h2> Featured Art </h2>
        <br />
        <ExpandableCarousel slideSelect={0} />
      </div>
      <div
        className="market-product-list-container"
      >
        <h2> Selected Woks </h2>
        <ProductView productList={productListData.productList} />
        <Fab color="primary" aria-label="add" size="small" onClick={updateProductList}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Market;
