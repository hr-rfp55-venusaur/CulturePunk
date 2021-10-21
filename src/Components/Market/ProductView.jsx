import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref, child, get } from 'firebase/database';
import ProductCard from './ProductCard';
import { db } from '../../firebase';
import { useAppContext } from '../../ContextObj';

export default function ProductView({ productList }) {
  const [updateFavorites, setUpdateFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const dbRef = ref(db);
  const { currentUser } = useAppContext();

  useEffect(() => {
    get(child(dbRef, 'favorites'))
      .then((snapshot) => {
        const data = [];
        const results = snapshot.val();
        Object.values(results).forEach((favoriteObj) => {
          if (favoriteObj.currentUser === currentUser.email) {
            data.push(favoriteObj.id);
          }
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
