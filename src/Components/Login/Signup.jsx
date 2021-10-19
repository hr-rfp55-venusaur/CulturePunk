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
    console.log(`1 --- emailref ${emailRef.current.value} passwordref ${passwordRef.current.value} passwordConfirmRef ${passwordConfirmRef}`);
    // form validation
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      alert('Passwords do not match.');
      return setError('Passwords do not match.');
    }

    // sign up a new user
    try {
      setError('');
      setLoading(true);
      console.log(`3 -- ${emailRef.current.value} ${passwordRef.current.value}`);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch(error) {
      console.log(`4 -- error ${error}` );
      setError('Failed to create a new account.');
    }
    setLoading(false);
  };

  console.log(`2 --- current user ${currentUser}`);

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
          Already have an account? <Link href='#'>Sign in</Link>
        </Grid>
      </Paper>   
    </Grid>
  )
};

export default Signup;