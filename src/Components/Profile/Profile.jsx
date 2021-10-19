import React from 'react';
import './Profile.css';
// import ContextObj from '../../ContextObj';
import ProfilePhoto from './ProfilePhoto';
import Info from './Info';
import Buttons from './Buttons';
import Stats from './Stats';
import SocialMediaLinks from './SocialMediaLinks';
import UpcomingEvents from './UpcomingEvents';

import userInfo from './lib/userInfo';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userInfo,
      selectedUser: 2,
    };
  }

  render() {
    const { users, selectedUser } = this.state;
    return (
      <div className="Profile">
        <div className="Profile-column left">
          <ProfilePhoto user={users[selectedUser]} />
          <Stats user={users[selectedUser]} />
          <Buttons />
          <UpcomingEvents user={users[selectedUser]} />
        </div>
        <div className="Pofile-column right">
          <Info user={users[selectedUser]} />
          <SocialMediaLinks user={users[selectedUser]} />
          {/* <Gallery /> */}
          {/* <Collection /> */}
        </div>
      </div>
    );
  }
}

export default Profile;
