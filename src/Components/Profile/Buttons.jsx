import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

const ProfileButtons = () => (
  <div className="ProfileButtons">
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      '& > :not(style)': { m: 1 },
    }}
    >
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Fab color="secondary" variant="extended" size="medium">
        <EditIcon sx={{ mr: 1 }} />
        Message
      </Fab>
    </Box>
  </div>
);

export default ProfileButtons;
