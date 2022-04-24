import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../image/login.png'

const Register = () => {
    const {user,registerUser,isLoading,authError}=useAuth()
    const [registerData, setRegisterData]=useState({})

    const location=useLocation()
    const navigate=useNavigate()

    const handleOnBlur=e=>{

        const field=e.target.name
        const value=e.target.value

        const newLoginData={...registerData}
        newLoginData[field]=value
        setRegisterData(newLoginData)
       
    }

    const handleRegister=e=>{
       
        if(registerData.password !== registerData.password1){
            alert('your pass did not match')
            return
        }

        registerUser(registerData.email, registerData.password, registerData.name,location,navigate)

        e.preventDefault()
        e.target.reset()
    }

    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>

            <Typography variant='h4'>Register</Typography>
             
            { !isLoading && <form onSubmit={handleRegister}>

             <TextField
             sx={{my:1, width:'75%'}}
                id="standard-search"
                label="your Name"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
             />
             <br />

             <TextField
             sx={{my:1, width:'75%'}}
                id="standard-search"
                label="your email"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
             />
             <br />

            <TextField
                 sx={{my:1, width:'75%'}}
                id="standard-search"
                label="your password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
             />
             <br />

             <TextField
                 sx={{my:1, width:'75%'}}
                id="standard-search"
                label="Retype your password"
                type="password"
                name="password1"
                onBlur={handleOnBlur}
                variant="standard"
             />
             <br />

             <Button   sx={{my:1}} variant='contained' type='submit'>Login</Button>

             </form> }

             {  isLoading && <CircularProgress /> }

             <Link to={'/login'}>Already Register !! Click here for login</Link>
          
          {user?.email && <Alert severity="success">User create successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        
      </Grid>
     </Container>
    );
};

export default Register;