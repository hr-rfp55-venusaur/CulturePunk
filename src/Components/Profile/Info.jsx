import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

import SocialMediaLinks from './SocialMediaLinks';
import Stats from './Stats';
import Buttons from './Buttons';


const ProfileInfo = ({ user }) => (
  <div className="ProfileInfo">
    <div className="top-row">
      <div className="Name"><h2>{user.name}</h2></div>
      <div className="user-type"><h3>{user.accountType}</h3></div>
    </div>
    <div className="user-about">
      {user.about}
    </div>
    <div className="box-row">
      <div className="stats-and-buttons">
        <Stats user={user} />
        <Buttons />
      </div>
      <SocialMediaLinks user={user} />
    </div>
  </div>
);

ProfileInfo.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileInfo;
