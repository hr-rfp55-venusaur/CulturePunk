import React from 'react';
import '../../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaLinks = ({user}) => (
  <div className="SocialMediaLinks">
    On Social Media:
    <ul className="link-list">
      <li>
        <FacebookIcon />
        {user.socialMedia.Facebook}
      </li>
      <li>
        <InstagramIcon />
        {user.socialMedia.Instagram}
      </li>
      <li>
        <TwitterIcon />
        {user.socialMedia.Twitter}
      </li>
      <li>
        <LinkedInIcon />
        {user.socialMedia.LinkedIn}
      </li>
      <li>
        <YouTubeIcon />
        {user.socialMedia.YouTube}
      </li>
      <li>
        <PinterestIcon />
        {user.socialMedia.Pinterest}
      </li>
    </ul>
  </div>
);

export default SocialMediaLinks;
