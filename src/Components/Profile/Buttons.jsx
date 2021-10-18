import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const ProfileButtons = () => (
  <div className="ProfileButtons">
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Fab color="secondary" variant="extended" size="small">
        <EditIcon sx={{ mr: 1 }} />
        Message
      </Fab>
    </Box>
  </div>
);

export default ProfileButtons;
