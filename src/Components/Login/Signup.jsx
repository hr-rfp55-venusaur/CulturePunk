import React, { useRef, useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Link } from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router-dom';

import '../../App.css';

import {useAppContext} from '../../ContextObj'; //use Auth context

const backgroundStyles = {
  padding: '10vh',
  backgroundImage: 'linear-gradient(225deg, rgba(238,53,32,.65), rgba(246,245,233,.1) 70.71%), linear-gradient(135deg, rgba(53,157,243,1), rgba(246,245,233,1) 70.71%)'
};

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAppContext();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 600,
    margin: '20px auto',  
  };

  const avatarStyle = {
    backgroundColor: 'orange'
  };

  const textFieldStyle = {
    marginBottom: '2vh'
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // form validation
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      alert('Passwords do not match.');
      return setError('Passwords do not match.');
    }

    // sign up a new user
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/login');
    } catch(error) {
      setError('Failed to create a new account.');
    }
    setLoading(false);
  };
  
  return (
    <Grid style={backgroundStyles}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockIcon /></Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField label='Email'  inputRef={emailRef} fullWidth={true} required/>      
          <TextField type='password' label='Password'  inputRef={passwordRef} fullWidth={true} required/>
          <TextField type='password' label='Re-enter Password' inputRef={passwordConfirmRef} fullWidth={true} required/>
          <Button disabled={loading} type='submit' color='primary' variant='contained' style={{marginTop: 20}} >Sign UP</Button> 
        </form>
        <Grid style={{marginTop: '1vh'}}>
          Already have an account? <Link href='login'>Sign in</Link>
        </Grid>
      </Paper>   
    </Grid>
  )
};

export default Signup;