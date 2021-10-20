/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './Profile.css';
// import PropTypes from 'prop-types';
// import ContextObj from '../../ContextObj';
import ProfilePhoto from './ProfilePhoto';
import Info from './Info';
import Buttons from './Buttons';
import Stats from './Stats';
import SocialMediaLinks from './SocialMediaLinks';
import UpcomingEvents from './UpcomingEvents';
import Gallery from './Gallery/Gallery';
// import Collection from './Collection/Collection';
// import Carousel from '../Homepage/Carousel';

import userInfo from '../../data/userInfo';
import productData from '../Market/productData';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userInfo,
      selectedUser: 0,
      items: productData.assets,
    };
  }

  render() {
    const { users, selectedUser, items } = this.state;
    return (
      <div className="Profile">
        <div className="parallax" />
        <div className="Profile-column left">
          <ProfilePhoto user={users[selectedUser]} />
          <Stats user={users[selectedUser]} />
          <Buttons />
          <UpcomingEvents user={users[selectedUser]} />
          {/* <UpcomingEventsScroll user={users[selectedUser]} /> */}
        </div>
        <div className="Pofile-column right">
          <Info user={users[selectedUser]} />
          <SocialMediaLinks user={users[selectedUser]} />
          <Gallery items={items.slice(0, 7)} />
          {/* <Collection items={items.slice(7, 13)} /> */}
          {/* <Carousel /> */}
          {/* <Carousel /> */}
        </div>
      </div>
    );
  }
}

export default Profile;
