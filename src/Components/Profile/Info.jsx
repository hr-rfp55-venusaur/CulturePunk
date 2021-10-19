import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

const ProfileInfo = ({ user }) => (
  <div className="ProfileInfo">
    <div className="toprow">
      <div className="Name"><h2>{user.name}</h2></div>
      <div className="user-type"><h3>{user.accountType}</h3></div>
    </div>
    <div className="user-about">
      {user.about}
    </div>
  </div>
);

ProfileInfo.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileInfo;
