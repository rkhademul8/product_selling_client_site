import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

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



const ProductSubmitModal = ({open,handleClose,product}) => {
    const {name,price}=product

    const handleSubmit=e=>{
        e.preventDefault()
        // colect data and send to server       
        alert('success')
        handleClose()

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
            <Typography style={{textAlign:"center"}} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>

            <form >
            
            <TextField
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                label="Your name" 
                variant="outlined"
            />

            <TextField
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                label="Your Email" 
                variant="outlined"
            />

            <TextField
                sx={{width:'90%', my:2}}
                id="outlined-basic"
                label="Phone number" 
                variant="outlined"
            />

            <TextField
                 disabled
                 sx={{width:'90%', my:2}}
                size='small'
                defaultValue= {price} 
            />
            <Box style={{textAlign:'center', margin:'10px'}}>
          <Button onClick={handleSubmit} variant='contained'>Confirm</Button>
          </Box>
            </form>

          </Box>
        </Fade>
      </Modal>
    );
};

export default ProductSubmitModal;