import React from 'react';
import { Grid, Paper, TextField, Button, Link, Typography } from '@material-ui/core';

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
      <Grid>
        <Button type='submit' color='primary' variant='contained' xs={12} >Sign UP</Button> 
      </Grid>
      <Grid style={{marginTop: '1vh'}}>
        Already have an account? <Link href='#'>Sign in</Link>
      </Grid>
  
    
 
      
    
    </Paper>   
  </Grid>
  )
};

export default Signup;