/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './Profile.css';
// import PropTypes from 'prop-types';
import { useAppContext } from '../../ContextObj'; // use Auth context

import ProfilePhoto from './ProfilePhoto';
import Info from './Info';
import UpcomingEvents from './UpcomingEvents';
import Gallery from './Gallery/Gallery';
import Collection from './Collection/Collection';
import ExpandableCarousel from '../Home/ExpandableCarousel';

// import userInfo from '../../data/userInfo';
// import productData from '../Market/productData';

const carouselStyle = {
  display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px', overflow: 'hidden', perspective: '1000px',
};

const Profile = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: userInfo,
  //     selectedUser: 2,
  //     items: productData.assets,
  //   };
  // }
  const {
    users, setUsers, selectedUser, setSelectedUser, items, setItems,
  } = useAppContext();

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const moveCamera = () => {
      document.documentElement.style.setProperty('--cameraZ', offset * -1.8);
    };
    const handleScroll = () => {
      setOffset(window.pageYOffset);
      moveCamera();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  // componentDidUpdate() {
  //   window.addEventListner('scroll', this.handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', this.handleScroll);
  //   };
  // }

  // handleScroll() {
  //   this.setOffset(window.pageYOffset);
  // }

  return (
    <div
      className="Profile"
    >
      <div
        className="Profile-overview"
        id="Profile-overview"
        style={{
          transform: `translateY(${offset * 2}px) translateZ(${offset * -1.8}px)`,
        }}
      >
        <ProfilePhoto
          user={users[selectedUser]}
          // className="Profile-overview"
          // style={{
          //   transform: `translateY(${offset * 0.8}px) translateZ(${offset * 10}px)`,
          // }}
        />
        <Info user={users[selectedUser]} />
        <UpcomingEvents user={users[selectedUser]} />
      </div>
      <div
        style={carouselStyle}
      >
        <h3>Gallery</h3>
        <ExpandableCarousel slideSelect={1} />
      </div>
      <div style={carouselStyle}>
        <h3>Collection</h3>
        <ExpandableCarousel slideSelect={1} />
      </div>
    </div>
  );
};

export default Profile;
