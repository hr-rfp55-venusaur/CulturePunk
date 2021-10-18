import React from 'react';
import '../../App.css';
// import ContextObj from '../../ContextObj';
import ProfilePhoto from './ProfilePhoto';
import Info from './Info';
import Buttons from './Buttons';
// import SocialMediaLinks from './SocialMediaLinks';

import userInfo from './lib/userInfo';

const Profile = () => (
  <div className="Profile">
    <div>
      <ProfilePhoto />
      <Info info={userInfo[0]} />
    </div>
    <Buttons />
  </div>
);

export default Profile;
