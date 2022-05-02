import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Login from '../../Login/Login/Login';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';
import './Home.css'

import banner from '../../../image/banner.jpg'

import { FiTruck, } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>

            {/* banner part */}

           <Box className='banner_bg'>
            <Container>
                
                <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%', height:"450px"}} src={banner} alt="" />
                </Grid>

                <Grid className='banner_content' item xs={12}  md={6}>
                <h3 className='banner_content_h3'>Finding Your Perfect Clothes</h3>
               
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas itaque illo officiis temporibus quis voluptate aperiam adipisci. Adipisci repellat ratione labore, itaque atque distinctio reiciendis magnam facilis accusamus fugit.</Typography>
                
                <Box className='button_sty'>
                <Button >Buy Now</Button>
                </Box>
                </Grid>
                
                </Grid>

            </Container>          
           </Box>

        {/* service part */}

       
             <Container>
             <h3 className='banner_content_h3' style={{textAlign:'center'}}> Our services</h3>
                
                <Grid className='service' container spacing={4}>

               <Grid  item xs={12} md={4}>   
                    <Box className='service-1'>
                    <FiTruck />
                    <h4>FREE SHIPPING</h4> 
                    </Box>
                </Grid>
            

                <Grid item xs={12}  md={4}>
                    <Box  className='service-2'>
                    <AiOutlineHistory />
                    <h4>FREE RETURNS</h4> 
                    </Box>
                </Grid>

                <Grid  item xs={12}  md={4}>
                    <Box className='service-3'>
                        <BiSupport />
                        <h4>CUSTOMER SUPPORT</h4>  
                    </Box>  
                </Grid>
                </Grid>

            </Container> 



            <Product></Product>


            {/* Newsletter */}

            <Container className='Newsletter'>
            <h3 className='banner_content_h3' style={{color:'#fff', margin:'10px 0px'}}>Newsletter</h3>
            <Typography  style={{color:'#fff', margin:'20px 0px' }}>
            Subscribe to our newsletter and get 20% off your first purchase
            </Typography>

                <input type="text" placeholder='Your email'></input> <br />
                    
                    <Button className='btn_news' variant='contained'>Subscribe</Button>
            </Container>


            <Footer></Footer>
          
          
        </div>
    );
};

export default Home;