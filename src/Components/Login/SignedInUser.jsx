import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@material-ui/core';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';;

import { useAppContext } from '../../ContextObj'; //use Auth context


const SignedInUser = () => {
  const [error, setError] = useState('');
  const { currentUser } = useAppContext();
  
  const gridStyles = {
    paddingTop: '15vh'
  }

  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 600,
    margin: '20px auto',  
  };

  const handleLogout = function() {
      console.log('logged out');
  }

  return (
    <Grid style={gridStyles}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar><AccountCircleIcon /></Avatar> 
          <h2>You are logged in!</h2>
          Email: {currentUser.email}
        </Grid>
      </Paper>   
    </Grid>
  )

}

export default SignedInUser;