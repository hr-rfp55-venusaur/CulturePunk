import React from 'react';
import './Profile.css';
// import ContextObj from '../../ContextObj';
import Box from '@mui/material/Box';

const ProfilePhoto = ({ user }) => (
  <Box
    className="ProfilePhoto-box"
    sx={{
      width: 300,
      height: 300,
      // backgroundImage: `url(${user.photoUrl})`,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    {user.photoUrl && <img className="ProfilePhoto" alt="" src={user.photoUrl} />}
  </Box>
);

export default ProfilePhoto;
