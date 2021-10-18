import React from 'react';
import '../../App.css';
// import ContextObj from '../../ContextObj';
import Box from '@mui/material/Box';

const ProfilePhoto = () => (
  // <div className="ProfilePhoto-box">
  //   <img className="ProfilePhoto" alt="" src="./lib/pexels-pixabay-220453.jpg" />
  // </div>
  <Box
    sx={{
      width: 300,
      height: 300,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  />
);

export default ProfilePhoto;
