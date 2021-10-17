import * as React from 'react';
// import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default function ProductView({ productList }) {
  return (
    <div className="market-product-list">
      {productList.map((product, index) => <ProductCard index={index} product={product} />)}
    </div>
  );
}

// ProductView.propTypes = {
//   productList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
// };

// PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
