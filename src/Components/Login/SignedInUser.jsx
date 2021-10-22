import React, { useState } from 'react';
import { Grid, Paper, Avatar, Button, Link } from '@material-ui/core';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';;

import { useAppContext } from '../../ContextObj';


const SignedInUser = () => {
  const [error, setError] = useState('');
  const { currentUser } = useAppContext();
  
  const gridStyles = {
    paddingTop: '15vh'
  }

  const paperStyle = {
    padding: 20,
    height: '30vh',
    width: 600,
    margin: '20px auto',  
  };

  const handleLogout = function() {
      console.log('logged out');
  }

  const handleGoToMarket = function() {
      console.log('go to market');
  }

  return (
    <Grid style={gridStyles}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar><AccountCircleIcon /></Avatar> 
          <h2>You are logged in!</h2>
          Email: {currentUser.email}
        </Grid>
        <Button onClick={handleLogout} type='submit' color='primary' variant='contained' fullWidth>Go To Market</Button>
        <Link>Log Out</Link> 
       
      </Paper>  
      
    </Grid>
  )

}

export default SignedInUser;