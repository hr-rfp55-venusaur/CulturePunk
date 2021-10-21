import React from 'react';
// import PropTypes from 'prop-types';
import '../Profile.css';
// import GalleryItem from './GalleryItem';
// import ProductCard from '../../Market/ProductCard';
import Carousel from '../../Homepage/Carousel';

const ProfileGallery = () => (
  <div className="ProfileGallery Profile-art-set">
    <h3>Gallery</h3>
    {/* <div className="ProfileCarousel">
      {items.map((item) => (
        <GalleryItem className="GalleryItem" item={item} key={item.id} />
        // <ProductCard className="item" product={item} key={item.id} />
      ))}
    </div> */}
    <Carousel className="ProfileCarousel" slideSelect={0} />
  </div>
);

// ProfileGallery.propTypes = {
//   items: PropTypes.instanceOf(Array).isRequired,
// };

export default ProfileGallery;
