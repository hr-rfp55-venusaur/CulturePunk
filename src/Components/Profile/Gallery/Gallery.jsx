import React from 'react';
// import PropTypes from 'prop-types';
import '../Profile.css';
// import GalleryItem from './GalleryItem';
// import ProductCard from '../../Market/ProductCard';
import ExpandableCarousel from '../../Home/ExpandableCarousel';

const ProfileGallery = () => (
  <div className="ProfileGallery Profile-art-set">
    <h3>Gallery</h3>
    {/* <div className="ProfileCarousel">
      {items.map((item) => (
        <GalleryItem className="GalleryItem" item={item} key={item.id} />
        // <ProductCard className="item" product={item} key={item.id} />
      ))}
    </div> */}
    <ExpandableCarousel className="ProfileCarousel" slideSelect={0} />
  </div>
);

// ProfileGallery.propTypes = {
//   items: PropTypes.instanceOf(Array).isRequired,
// };

export default ProfileGallery;
