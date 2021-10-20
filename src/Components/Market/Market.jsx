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
  }, [sortValue]);

  useEffect(() => {
    getProductList(0, productListData.limit, sortValue, direction)
      .then((res) => {
        // console.log('useEffect, direction', direction, res.data)
        updateProductListData({
          productList: res.data,
          offset: productListData.limit,
          limit: 6,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [direction]);

  React.useEffect(() => {
    updateProductList();
  }, [productListData.isFirstLoad]);

  return (
    <div className="market-page">
      <header className="header">
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

/*

Last working ---------

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: [],
    offset: 0,
    limit: 6,
  });
  const [element, setElement] = React.useState(null);
  const [sortValue, setSortValue] = React.useState('token_id');

  const observer = React.useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      console.log('intersection detected\n:', first);
      if (first.isIntersecting) {
        console.log('productListData', productListData);
        // getProductList.current();

        getProductList(productListData.offset, productListData.limit) //closure issue
          .then((res) => {
            console.log('data received:\n', res.data);
            updateProductListData({
              productList: [...productListData.productList.concat(res.data)], //closure issue
              offset: productListData.offset + 1,
              limit: 6,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, { threshold: 0.5 }),
  );

  React.useEffect(() => {
    getProductList.current = getProductList;
  }, [productListData]);

  React.useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div className="market-page">
      <header className="header">
        Nav bar goes here!
        <h1>Gallery</h1>
      </header>
      <Sort setSortValue={setSortValue} />
      <div className="market-product-list-container">
        <ProductView productList={productListData.productList} />
        <footer style={{ backgroundColor: 'green', height: '15px' }} ref={setElement} />
        <Fab color="primary" aria-label="add" size="small" onClick={getProductList}>
        <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Market;

*/

/* Works for initial load
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

  */

/* first tutorial

   useEffect(() => {
    getProductList(productListData.offset, productListData.limit)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productListData.offset]);

*/
