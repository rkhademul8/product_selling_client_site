import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../image/login.png'


const Login = () => {

    const [loginData, setLoginData]=useState({})

    const handleOnChange=e=>{

        const field=e.target.name
        const value=e.target.value

        const newLoginData={...loginData}
        newLoginData[field]=value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit=e=>{
        alert("Hello")
        e.preventDefault()
        e.target.reset()
    }
    return (
     <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>

            <Typography variant='h4'>Login</Typography>
             
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

             </form>

             <Link to={'/register'}>New user !! Click here for register</Link>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        
      </Grid>
     </Container>
    );
};

export default Login;