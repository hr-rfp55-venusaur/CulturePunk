// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductView from './ProductView';

const getProductList = (offset, limit) => axios.get(`http://localhost:3001/products?offset=${offset}&limit=${limit}`);

// const getProductList = (offset, limit) => {
//   return axios.get(`http://localhost:3001/products?offset=${offset}&limit=${limit}`)
// .then((res) => {
//   console.log('data received:\n', res.data);
//   updateProductListData({
//     productList: [...productListData.productList.concat(res.data)],
//     offset: productListData.offset + 1,
//     limit: 6,
//   });
// })
// .catch((error) => {
//   console.log(error);
// });
// };

function Market() {
  const [productListData, updateProductListData] = useState({
    productList: [],
    offset: 0,
    limit: 6,
  });
  const [element, setElement] = React.useState(null);

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
      <div className="sidebar" />
      <div className="market-product-list-container">
        <ProductView productList={productListData.productList} />
        <footer style={{ backgroundColor: 'green', height: '15px' }} ref={setElement} />
      </div>
    </div>
  );
}

export default Market;


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