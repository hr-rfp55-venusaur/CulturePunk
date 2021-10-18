import React from 'react';
import './Profile.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaLinks = ({user}) => (
  <div className="SocialMediaLinks">
    <h4>On Social Media:</h4>
    <div className="link-list">
      {user.socialMedia.Facebook && (
        <div>
          <FacebookIcon />
          <a className="App-link" href={user.socialMedia.Facebook}>{user.socialMedia.Facebook}</a>
        </div>
      )}
      {user.socialMedia.Instagram && (
        <div>
          <InstagramIcon />
          <a className="App-link" href={user.socialMedia.Instagram}>{user.socialMedia.Instagram}</a>
        </div>
      )}
      {user.socialMedia.Twitter && (
        <div>
          <TwitterIcon />
          <a className="App-link" href={user.socialMedia.Twitter}>{user.socialMedia.Twitter}</a>
        </div>
      )}
      {user.socialMedia.LinkedIn && (
        <div>
          <LinkedInIcon />
          <a className="App-link" href={user.socialMedia.LinkedIn}>{user.socialMedia.LinkedIn}</a>
        </div>
      )}
      {user.socialMedia.Pinterest && (
        <div>
          <PinterestIcon />
          <a className="App-link" href={user.socialMedia.Pinterest}>{user.socialMedia.Pinterest}</a>
        </div>
      )}
      {user.socialMedia.YouTube && (
        <div>
          <YouTubeIcon />
          <a className="App-link" href={user.socialMedia.YouTube}>{user.socialMedia.YouTube}</a>
        </div>
      )}
    </div>
  </div>
);

export default SocialMediaLinks;
