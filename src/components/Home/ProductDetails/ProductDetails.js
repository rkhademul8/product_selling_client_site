import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const ProductDetails = ({product}) => {

    const {name,img,description,price}=product
    return (

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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         </Grid>
    );
};

export default ProductDetails;