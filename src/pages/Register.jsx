import { TextField, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import GoogleIcon from '@mui/icons-material/Google';


const Register = () => {
  return (
    <div>
      <CssBaseline>
       <Grid
       container
       justifyContent='center'
       alignItems='center'
       sx={{
         height: '100vh'
       }}
       >
        <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevaition={8} sx={{padding: '1rem'}}>
            <Typography variant= "h6" component='h1' align= 'center' gutterBottom={true} sx= {{
              color: "#1976D2",
              fontWeight: 600,
            }}>
              Sign Up
            </Typography>
            <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'>

            <TextField 
            id="outlined-basic"
            label="Login" 
            variant="outlined" 
            fullWidth
            margin='normal'
            align ='center' sx={{
              maxWidth: '50%',
            }}
             />
            <TextField 
            color='primary'
            id="outlined-basic" 
            fullWidth
            margin='normal'
            label="Password" 
            variant="outlined" 
            align ='center' sx={{
              maxWidth: '50%',
              marginBottom: '2rem'
              }}
             />
             </Grid>
             <Typography variant= "h2" align= 'center' gutterBottom={true} sx= {{
              color: "#1976D2",
              fontSize: '16px', 
              fontWeight: 600,
            }}>
              Sign up with
            </Typography>
            <Grid container
            direction='column'
            justifyContent='center'
            alignItems='center'>
              <GoogleIcon fontSize='large'  sx={{
              marginBottom: "2rem"

            }}/>
            </Grid>
            <Typography variant= "h2" align= 'center' gutterBottom={true} sx= {{
              color: "#1976D2",
              fontSize: '14px', 
              fontWeight: 600,
            }}>
              Don't have an account yet?
              Register
            </Typography>
            
          </Paper>

        </Grid>
       </Grid>
        
      </CssBaseline>
    </div>
  );
}

export default Register;