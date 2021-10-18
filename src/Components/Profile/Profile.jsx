import React from 'react';
import '../../App.css';
// import ContextObj from '../../ContextObj';
import ProfilePhoto from './ProfilePhoto';
import Info from './Info';
import Buttons from './Buttons';
import Stats from './Stats';
import SocialMediaLinks from './SocialMediaLinks';
import UpcomingEvents from './UpcomingEvents';
// import SocialMediaLinks from './SocialMediaLinks';

import userInfo from './lib/userInfo';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userInfo,
      selectedUser: 0,
    };
  }

  render() {
    const { users, selectedUser } = this.state;
    return (
      <div className="Profile">
        <div>
          <ProfilePhoto />
          <Info user={users[selectedUser]} />
        </div>
        <div className="profile-side-column">
          <Buttons />
          {/* <Stats user={users[selectedUser]} /> */}
          <SocialMediaLinks user={users[selectedUser]} />
          {/* <UpcomingEvents user={users[selectedUser]} /> */}
        </div>
      </div>
    );
  }
}

export default Profile;
