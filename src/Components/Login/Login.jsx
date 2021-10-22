import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@material-ui/core';

import LockIcon from '@mui/icons-material/Lock';

import { useAppContext } from '../../ContextObj'; //use Auth context

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAppContext();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const backgroundStyles = {
    padding: '10vh',
    backgroundImage: 'linear-gradient(225deg, rgba(238,53,32,.65), rgba(246,245,233,.1) 70.71%), linear-gradient(135deg, rgba(53,157,243,1), rgba(246,245,233,1) 70.71%)'
  };

  const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 600,
    margin: '20px auto',  
  };

  const avatarStyle = {
    backgroundColor: 'Green'
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    // sign in an existing user
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/market');
      //setLoading(false);
    } catch(error) {
      setError('Failed to sign in to account.');
    }
    
  };
  return (
    <Grid style={backgroundStyles}>
      <Paper elevation={10} style={paperStyle}>
      <Grid align='center'>
        <Avatar style={avatarStyle}><LockIcon /></Avatar>
        <h2>Sign In</h2>
      </Grid>
      
      <form onSubmit={handleSubmit}>
        <TextField label='Email' inputRef={emailRef} fullWidth={true} required/>
        <TextField type='password' inputRef={passwordRef} label='Password' fullWidth={true} required/>
        <Grid align='left'>
          <FormControlLabel
            control={
              <Checkbox name='rememberCheckBox' color='primary'/>
            } 
            label="Remember me"
          />
        </Grid>
        
        <Typography align='left'>
          <Link href='/resetpassword'>Forget password</Link>
        </Typography>
        <Typography align='left'>
          Need an account?  
          <Link href='/signup'>Sign Up</Link>
        </Typography>
        <Button type='submit' color='primary' fullWidth={true} variant='contained' style={{marginTop: 20}}>sign in</Button> 
      </form>
      </Paper>
    </Grid>
  )
};

export default Login;
