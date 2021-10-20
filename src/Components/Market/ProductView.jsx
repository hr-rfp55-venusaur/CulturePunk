import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { useAppContext } from '../../ContextObj';
import {
  ref, child, get,
} from 'firebase/database';
import { db } from '../../firebase';

export default function ProductView({ productList }) {
  const [updateFavorites, setUpdateFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const dbRef = ref(db);

  useEffect(() => {
    get(child(dbRef, 'favorites'))
      .then((snapshot) => {
        console.log(snapshot.val())
        const data = [];
        const results = snapshot.val();
        Object.values(results).forEach((result) => {
          data.push(result);
        });
        setFavorites(data);
        setUpdateFavorites(false);
      })
      .catch((err) => (err));
  }, [updateFavorites]);

  return (
    <div className="market-product-list">

      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          favorites={favorites}
          setUpdateFavorites={setUpdateFavorites}
        />
      ))}

    </div>
  );
}

ProductView.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
