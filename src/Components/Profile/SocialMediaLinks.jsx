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
          <a href={user.socialMedia.Facebook}>{user.socialMedia.Facebook}</a>
        </div>
      )}
      {user.socialMedia.Instagram && (
        <div>
          <InstagramIcon />
          <a href={user.socialMedia.Instagram}>{user.socialMedia.Instagram}</a>
        </div>
      )}
      {user.socialMedia.Twitter && (
        <div>
          <TwitterIcon />
          <a href={user.socialMedia.Twitter}>{user.socialMedia.Twitter}</a>
        </div>
      )}
      {user.socialMedia.LinkedIn && (
        <div>
          <LinkedInIcon />
          <a href={user.socialMedia.LinkedIn}>{user.socialMedia.LinkedIn}</a>
        </div>
      )}
      {user.socialMedia.Pinterest && (
        <div>
          <PinterestIcon />
          <a href={user.socialMedia.Pinterest}>{user.socialMedia.Pinterest}</a>
        </div>
      )}
      {user.socialMedia.YouTube && (
        <div>
          <YouTubeIcon />
          <a href={user.socialMedia.YouTube}>{user.socialMedia.YouTube}</a>
        </div>
      )}
    </div>
  </div>
);

export default SocialMediaLinks;
