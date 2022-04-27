import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const ProductSubmitModal = ({open,handleClose,product,setOrderSuccess}) => {
    const {productName,productPrice}=product
    const {user}=useAuth()

    const initialInfo={name:user.displayName, email:user.email, phone:''}

    const [orderInfo, setOrder]=useState(initialInfo)

    const handleOnBlur=e=>{
        const field=e.target.name
        const value=e.target.value

        const newInfo={ ...orderInfo }
        newInfo[field]=value
        setOrder(newInfo)
        
    }

    const d=new Date()
    const date=d.toLocaleDateString()

    const handleSubmit=e=>{

        e.preventDefault()
        // colect data  

        const order={
          ...orderInfo,
          productName:productName,
          date:date,
          price:productPrice,

        }

      
        // console.log(order);

        // send to server    
        
        fetch('http://localhost:5000/orders',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
          // console.log(data);
          if(data.insertedId){
            setOrderSuccess(true)
            handleClose()

          }
        })


        // handleClose()
        

    }
   

    return (

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

           <Typography>
            Product Name: {productName}
           </Typography>

            <form >
            
            

            <TextField
            required
            label="Your Name"
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                name="name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                variant="outlined"
            />

            <TextField
            label="Your Email"
            name="email"
            onBlur={handleOnBlur}
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                defaultValue={user.email} 
                variant="outlined"
            />

            <TextField
              required
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                name="phone"
                onBlur={handleOnBlur}
                label="Phone number" 
                variant="outlined"
            />
           

            <TextField
              label="Product Price"
                 disabled
                 sx={{width:'90%', my:2}}
                size='small'
                defaultValue= {productPrice} 
            />
            <Box style={{textAlign:'center', margin:'10px'}}>
          <Button onClick={handleSubmit} variant='contained'><Link to={'/dashboard'}>Confirm</Link></Button>
          </Box>
            </form>

          </Box>
        </Fade>
      </Modal>
    );
};

export default ProductSubmitModal;