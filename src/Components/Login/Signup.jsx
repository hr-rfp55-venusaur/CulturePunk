import React, { useRef, useState } from 'react';
import { Grid, Paper, TextField, Button, Link } from '@material-ui/core';

import '../../App.css';

import {useAppContext} from '../../ContextObj'; //use Auth context

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAppContext();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 600,
    margin: '20px auto',  
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
    } catch(error) {
      setError('Failed to create a new account.');
    }
    setLoading(false);
  };
  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField label='Email' variant='filled' style={textFieldStyle} inputRef={emailRef} fullWidth={true} required/>      
          <TextField type='password' label='Password'  variant='filled' style={textFieldStyle} inputRef={passwordRef} fullWidth={true} required/>
          <TextField type='password' label='Re-enter Password' variant='filled' style={textFieldStyle} inputRef={passwordConfirmRef} fullWidth={true} required/>
          <Button disabled={loading} type='submit' color='primary' variant='contained' xs={12} >Sign UP</Button> 
        </form>
        
        <Grid style={{marginTop: '1vh'}}>
          Already have an account? <Link href='login'>Sign in</Link>
        </Grid>
      </Paper>   
    </Grid>
  )
};

export default Signup;