import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

const ProfileButtons = () => (
  <Box
    className="ProfileButtons"
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      '& > :not(style)': { m: 1 },
    }}
  >
    <Fab className="followButton" color="primary" variant="extended" size="small">
      <AddIcon sx={{ mr: 1 }} />
      Follow
    </Fab>
    {/* <Fab color="secondary" aria-label="edit">
      <EditIcon />
    </Fab> */}
    <Fab className="messsageButton" color="secondary" variant="extended" size="small">
      <EditIcon sx={{ mr: 1 }} />
      Message
    </Fab>
  </Box>
);

export default ProfileButtons;
