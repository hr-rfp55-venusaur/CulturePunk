import React from 'react';
import PropTypes from 'prop-types';
import '../../../App.css';
// import CollectionItem from './CollectionItem';
import ProductCard from '../../Market/ProductCard';

const ProfileCollection = ({ items }) => (
  <div className="ProfileCollection ProfileCarousel">
    <h3>Collection</h3>
    {items.map((item) => (
      // <CollectionItem item={item} key={item.id} />
      <ProductCard product={item} key={item.id} />
    ))}
  </div>
);

ProfileCollection.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ProfileCollection;
