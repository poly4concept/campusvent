import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import { useNavigate } from 'react-router-dom'
import { AUTH } from '../../constants/actionTypes';
import Input from './Input';
import './Auth.css'

const theme = createTheme();

const SignUpButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginTop: '15px',
  marginBottom: '10px',
  backgroundColor: '#df861d',
  '&:hover': {
    backgroundColor: '#d67302',
  },
}));

const initialState = { firstName: '', lastName: '', email: '', password: '', };


export default function Auth() {
  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
  };
  const handleChange = (e) => {setForm({ ...form, [e.target.name]: e.target.value })}
  const handleShowPassword = () => {setShowPassword(!showPassword)}
  const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
          dispatch({ type: AUTH, payload: { result, token } })
          navigate('/home')
          console.log(res)
      } catch (error) {
          console.log(error);
      }
    }

    const googleError  = (error) => {
        console.log(error);
        console.log('unsuccesful');
    }

  const switchMode = () => {
    setIsSignUp((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={0} sm={4} md={6} >
          <Box className='header-text' >
            <Typography variant='h2' component='h3'>campus<span style={{color: '#df861d'}}>vent</span></Typography>
            <Typography component='h5'>campusvent brings all your events to you on one social tab</Typography>
          </Box>
        </Grid>
        <Grid item  xs={12} sm={8} md={6} component={Paper} elevation={0}  square>
          <Paper className='form-paper' elevation={2} sx={{ width: {md: 0.7, xs: '1'}, my: {md:'8vh', xs: 0}, mx:{md:4, xs: 0},}}
          >
            <Typography component="h1" variant="h4">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
               <Grid container spacing={2}>
                { isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
                )}
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              </Grid>
              <Box className='actions-box'>
                <SignUpButton type="submit" fullWidth variant="contained" >{ isSignup ? 'Create Account' : 'Log in' }</SignUpButton>
                <Link className='forget-password' href="#" variant="body2">Forgot password?</Link>
                <Divider><Chip size='small' variant='outlined' sx={{ color: '#df861d' }} label="or" /></Divider>
                <GoogleLogin
                        clientId="804636079608-msmit126iepobg9ctaa9bdveje5n31jc.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Box className='google-auth' onClick={renderProps.onClick}> <FcGoogle className='google-icon'/> Sign in with Google</Box>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                <Link className='switch-link' onClick={switchMode}>{ isSignup ? 'Log In': 'Sign Up for campusvent'}</Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}