import { Alert, Button, TextField } from '@mui/material';
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
            <h2>Make admin</h2>

            <form onSubmit={handleAdminSubmit}>

                <TextField
                type="email"
                label="email"
                onBlur={handleOnblur}
                variant='standard'
                
                /> <br />

                <Button variant='contained' type='submit'>Make admin</Button>

                {
                    success &&
                    <Alert severity='success'> Admin make successfully </Alert>
                }

            </form>
        </div>
    );
};

export default MakeAdmin;