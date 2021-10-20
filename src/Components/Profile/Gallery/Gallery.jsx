import React from 'react';
import PropTypes from 'prop-types';
import '../Profile.css';
import GalleryItem from './GalleryItem';
// import ProductCard from '../../Market/ProductCard';

const ProfileGallery = ({ items }) => (
  <div className="ProfileGallery">
    <h3>Gallery</h3>
    <div className="ProfileCarousel">
      {items.map((item) => (
        <GalleryItem item={item} key={item.id} />
        // <ProductCard className="item" product={item} key={item.id} />
      ))}
    </div>
  </div>
);

ProfileGallery.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ProfileGallery;
