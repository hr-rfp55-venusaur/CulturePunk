import React from 'react';
// import PropTypes from 'prop-types';
import '../../../App.css';
// import CollectionItem from './CollectionItem';
// import ProductCard from '../../Market/ProductCard';
import ExpandableCarousel from '../../Home/ExpandableCarousel';

const ProfileCollection = () => (
  <div className="ProfileCollection Profile-art-set">
    <h3>Collection</h3>
    {/* <div className="ProfileCarousel">
      {items.map((item) => (
        <CollectionItem item={item} key={item.id} />
        // <ProductCard product={item} key={item.id} />
      ))}
    </div> */}
    <ExpandableCarousel className="ProfileCarousel" slideSelect={1} />
  </div>
);

// ProfileCollection.propTypes = {
//   items: PropTypes.instanceOf(Array).isRequired,
// };

export default ProfileCollection;
