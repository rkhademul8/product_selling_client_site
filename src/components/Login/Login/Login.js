import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../image/login.png'
import useAuth from '../../../hooks/useAuth'
import Footer from '../../Shared/Footer/Footer';
import { Box } from '@mui/system';

const Login = () => {

    const [loginData, setLoginData]=useState({})
    const {user,googleSignIn,loginUser,authError}=useAuth()

    const location=useLocation()
    const navigate=useNavigate()

    const handleOnChange=e=>{

        const field=e.target.name
        const value=e.target.value

        const newLoginData={...loginData}
        newLoginData[field]=value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
        e.target.reset()
    }

    //  google signIn handle
    const signInwithGoogle=()=>{
        googleSignIn(location, navigate)
    }
    return (

        <>
       
    <Box style={{margin:'75px 0px'}}>
    <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>

        
       
            <h3 className='banner_content_h3' style={{textAlign:'center', fontSize:"40px"}}>  ===== Login ===== </h3>
             
             <form onSubmit={handleLoginSubmit}>

             <TextField
             sx={{my:1, width:'75%'}}
                id="standard-search"
                label="your email"
                type="email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
             />
             <br />

            <TextField
                 sx={{my:1, width:'75%'}}
                id="standard-search"
                label="your password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
             />
             <br />

             <Button   sx={{my:1}} variant='contained' type='submit'>Login</Button>

             <p>------------------------------------------</p>

             </form>


             <Button onClick={signInwithGoogle}   sx={{my:1}} variant='contained' >sign in with google</Button> <br />

             <Link to={'/register'}>New user !! Click here for register</Link>

             {user?.email && <Alert severity="success">User Login successfully</Alert> }
             
             { authError &&  <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        
      </Grid>
     </Container>
    </Box>

     <Footer></Footer>
     </>
    );
};

export default Login;