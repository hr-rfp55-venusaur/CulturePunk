import React from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@material-ui/core';

import '../../App.css';

import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 600,
    margin: '20px auto',  
  };

  const avatarStyle = {
    backgroundColor: 'orange'
  };

  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='center'>
        <Avatar style={avatarStyle}><LockIcon /></Avatar>
        <h2>Sign In</h2>
      </Grid>
      <TextField label='Email' placeholder='Enter email' fullWidth='true' required/>
      <TextField type='password' label='Password' placeholder='Enter password' fullWidth required/>
      <Grid align='left'>
        <FormControlLabel
          control={
            <Checkbox name='rememberCheckBox' color='primary'/>
          } 
          label="Remember me"
        />
      </Grid>
      
      <Typography align='left'>
        <Link href='#'>Forget password</Link>
      </Typography>
      <Typography align='left'>
        Need an account?  
        <Link href='/signup'>Sign Up</Link>
      </Typography>
      <Button type='submit' color='primary' fullWidth='true' variant='contained' style={{marginTop: 20}}>sign in</Button> 
    </Paper>   
  </Grid>
  )
};

export default Login;
