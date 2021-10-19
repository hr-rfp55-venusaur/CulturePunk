import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
// import ContextObj from '../../ContextObj';
import Box from '@mui/material/Box';

const ProfilePhoto = ({ user }) => (
  <Box
    className="ProfilePhoto-box"
    sx={{
      width: 300,
      height: 300,
      // backgroundImage: `url(${user.photoUrl})`,
      // backgroundColor: 'primary.dark',
      // '&:hover': {
      //   backgroundColor: 'primary.main',
      //   opacity: [0.9, 0.8, 0.7],
    }}
  >
    {user.photoUrl && <img height="300px" width="300px" className="ProfilePhoto" alt="" src={user.photoUrl} />}
  </Box>
);

ProfilePhoto.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default ProfilePhoto;
