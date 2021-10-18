import React from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@material-ui/core';

import '../../App.css';



const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 600,
    margin: '20px auto',  
  };

  const textFieldStyle = {
    marginBottom: '2vh'
  };

  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='center'>
        <h2>Sign Up</h2>
      </Grid>
    
      <TextField label='Email' variant='filled' style={textFieldStyle} fullWidth required/>      
      <TextField label='Password'  variant='filled' style={textFieldStyle} fullWidth required/>
      <TextField label='Re-enter Password' variant='filled' style={textFieldStyle} fullWidth required/>

      <Button type='submit' color='primary' fullWidth='true' variant='contained' style={{marginTop: 20}}>Sign UP</Button> 

      <Typography align='left'>
        Already have an account? <Link>Sign in</Link>
      </Typography>
 
      
    
    </Paper>   
  </Grid>
  )
};

export default Signup;