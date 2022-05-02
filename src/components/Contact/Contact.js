import { Button, Container, Grid, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <div>

            <Box style={{margin:'83px 0px'}}>
            
            <Container>

            <h3 className='banner_content_h3' style={{textAlign:'center'}}> Get In Touch</h3>
            
            <Grid container spacing={4} >
                <Grid item xs={12} md={6} >

                    <Box style={{border:'1px solid #ccc',padding:'20px'}}>
                    <TextField
            required
            sx={{width:'80%'}}
            id="standard-search"
            label="First Name"
            type="text"
            variant="standard"
            />
            <br />

            <TextField
            required
            sx={{width:'80%'}}
            id="standard-search"
            label="Last Name"
            type="text"
            variant="standard"
            />
            <br />

            <TextField
            required
            sx={{width:'80%'}}
            id="standard-search"
            label="Email"
            type="email"
            variant="standard"
            />
            <br />
            <br />
            

            <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Your message"
            style={{ width: '80%',height:"200px" }}
            />
            <br />
            <br />

            <Box className='button_sty'>
                <Button >Send Message</Button>
                </Box>
                <br />
                    </Box>
                            
                </Grid>

                <Grid  item xs={12}  md={6}>
                <Paper style={{padding:'25px', marginBottom:'30px'}} elevation={2}  sx={{py:5}}>
                   <Box>
                   <Typography variant='h5' style={{color:'#7971ea', fontSize:'25px',marginBottom:"10px"}}>NEW YORK</Typography>    
                   <Typography style={{color:'#333333', fontSize:'18px'}}>203 Fake St. Mountain View, San Francisco, California, USA</Typography>   
                    </Box> 
                </Paper>

                <Paper style={{padding:'25px',marginBottom:'30px'}} elevation={2}  sx={{py:5}}>
                   <Box>
                   <Typography variant='h5' style={{color:'#7971ea', fontSize:'25px',marginBottom:"10px"}}>LONDON</Typography>    
                   <Typography style={{color:'#333333', fontSize:'18px'}}>203 Fake St. Mountain View, San Francisco, California, USA</Typography>   
                    </Box> 
                </Paper>

                <Paper style={{padding:'25px',marginBottom:'30px'}} elevation={2}  sx={{py:5}}>
                   <Box>
                   <Typography variant='h5' style={{color:'#7971ea', fontSize:'25px',marginBottom:"10px"}}>CANADA</Typography>    
                   <Typography style={{color:'#333333', fontSize:'18px'}}>203 Fake St. Mountain View, San Francisco, California, USA</Typography>   
                    </Box> 
                </Paper>
                </Grid>
                
                </Grid>


                </Container>
            </Box>

<Footer></Footer>
       
            
        </div>
    );
};

export default Contact;