import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import ProductSubmitModal from '../Modal/ProductSubmitModal';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const ProductDetails = ({product,setOrderSuccess}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {name,img,description,price}=product

    const {user}=useAuth()


    return (
        <>

        <Grid item xs={4} sm={4} md={4} >
    <Card sx={{ minWidth: 275 }}>
    <CardMedia
        component="img"
        width='100%'
        height="400"
        image={img}
        alt="green iguana"
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>

        <Typography variant="h5" component="div">
          {price} Tk
        </Typography>
       
      </CardContent>
     
          <Box style={{textAlign:'center', margin:'10px'}}>

          
          {
            user.email ?
            <Button onClick={handleOpen} variant='contained'>Buy Now</Button>
          :
          <Link to={'/login'}><Button variant='contained'>Buy Now</Button></Link>
          }

        

          </Box>
          
    </Card>
         </Grid>

         <ProductSubmitModal  
         product={product}
         open={open}
         handleClose={handleClose}
         setOrderSuccess={setOrderSuccess}
         >

         </ProductSubmitModal>

    </>
    );
};

export default ProductDetails;