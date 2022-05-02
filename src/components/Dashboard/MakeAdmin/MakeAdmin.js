import { Alert, Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail]=useState('')
    const[success, setSuccess]=useState(false)

    const handleOnblur=e=>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit=e=>{
        const user={email}
        fetch('http://localhost:5000/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                e.target.reset('')
                setSuccess(true)
            }
           
        })
        e.preventDefault()
    }
    return (
        <div>
          <Container>
          <h3 className='banner_content_h3' style={{textAlign:'center', fontSize:"40px"}}>Make Admin</h3>

<form onSubmit={handleAdminSubmit}>

    <TextField
    type="email"
    label="email"
    onBlur={handleOnblur}
    variant='standard'
    
    /> <br /><br />

    <Box className='button_sty'>
    <Button variant='contained' type='submit'>Make admin</Button>
    </Box>

    

    {
        success &&
        <Alert severity='success'> Admin make successfully </Alert>
    }

</form>
          </Container>
        </div>
    );
};

export default MakeAdmin;