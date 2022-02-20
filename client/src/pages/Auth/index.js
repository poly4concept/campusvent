import  React, {useState} from 'react';
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
import Input from './Input';
import useStyles from './styles';

const theme = createTheme();

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
  };
  const handleChange = (e) => {}
  const handleShowPassword = () => {setShowPassword(!showPassword)}
  const googleSuccess = async (res) => {
        // console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            // navigate('/')
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
          <Box sx={{display: {xs: 'none', md: 'flex'}}} className={classes.textBox} >
            <Typography className={classes.logoText} variant='h2' component='h3'>campus<span style={{color: '#df861d'}}>vent</span></Typography>
            <Typography sx={{fontSize: '28px', lineHeight: '32px', fontWeight: 'normal', textAlign: 'left',}} className='logo' component='h5'>campusvent brings all your events to you on one social tab</Typography>
          </Box>
        </Grid>
        <Grid item  xs={12} sm={8} md={6} component={Paper} elevation={0}  square>
          <Paper elevation={2} sx={{ width: {md: 0.7, xs: '1'}, height: 0.8, my: {md:'10vh', xs: 0}, px: 5, py: 2, mx:{md:4, xs: 0}, display: 'flex', flexDirection: 'column', alignItems: 'center',}}
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
                { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
              </Grid>
              <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-evenly'}}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#df861d' }}>Sign In </Button>
                <Link sx={{ textAlign: 'center',color: '#df861d', mb: '5px', textDecoration: 'none' }} href="#" variant="body2">Forgot password?</Link>
                <Divider><Chip size='small' variant='outlined' sx={{ color: '#df861d' }} label="or" /></Divider>
                <GoogleLogin
                        clientId="804636079608-msmit126iepobg9ctaa9bdveje5n31jc.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <button onClick={renderProps.onClick}> <FcGoogle/> Sign in with Google</button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                <Link onClick={switchMode}>{ isSignup ? 'Log In': 'Sign Up for campusvent'}</Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}