import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import black_shirt from '../../../image/black.jpeg'
import casual_shirt from '../../../image/casual.jpeg'
import cotton_shirt from '../../../image/cotton.jpeg'
import formal_shirt from '../../../image/formal.jpeg'
import white_shirt from '../../../image/white.jpeg'
import { Alert, Container, Typography } from '@mui/material';
import ProductDetails from '../ProductDetails/ProductDetails';


// const products=[
//     {
//         img:black_shirt,
//         name:'Black Shirt',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum suscipit expedita nisi enim provident inventore facilis dolor. Optio, corporis?',
//         price:800,
//     },
//     {
//         img:casual_shirt,
//         name:'Casual Shirt',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum suscipit expedita nisi enim provident inventore facilis dolor. Optio, corporis?',
//         price:1000,
//     },
//     {
//         img:cotton_shirt,
//         name:'Cotton Shirt',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum suscipit expedita nisi enim provident inventore facilis dolor. Optio, corporis?',
//         price:500,
//     },
//     {
//         img:formal_shirt,
//         name:'Formal Shirt',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum suscipit expedita nisi enim provident inventore facilis dolor. Optio, corporis?',
//         price:800,
//     },
//     {
//         img:white_shirt,
//         name:'White Shirt',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum suscipit expedita nisi enim provident inventore facilis dolor. Optio, corporis?',
//         price:700,
//     },
// ]


const Product = () => {
    const[orderSucees, setOrderSuccess]=useState(false) 
    
    const [products, setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })

    return (
        <Box sx={{ flexGrow: 1 }} style={{margin:'50px 0px'}}>

            
            <Container >
            <h3 className='banner_content_h3' style={{textAlign:'center'}}> Our Products</h3>

            {orderSucees && <Alert severity="success">order SuccessFul</Alert> }
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                       

                        {
                            products.map(product=><ProductDetails
                            key={product._id}
                            product={product}
                            setOrderSuccess={setOrderSuccess}
                            ></ProductDetails>)
                        }


                </Grid>
            </Container>
      </Box>
    );
};

export default Product;