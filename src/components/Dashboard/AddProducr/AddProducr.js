import { Box, Button, Container, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProducr = () => {
    const [productName, setProductName]=useState('')

    // const handleName=e=>{
    //     setProductName(e.target.value)
    // }

    const [productDescrip, setProductDescrip]=useState('')
    const [productPrice, setProductPrice]=useState('')
    const [image, setImage]=useState(null)

    const handleAdd=e=>{
        e.preventDefault()
        if(!image){
            return
        }

        const formData=new FormData()
        formData.append('productName',productName)
        formData.append('productDescrip',productDescrip)
        formData.append('productPrice',productPrice)
        formData.append('image',image)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
            if(data.insertedId){
                alert('Car add seccessfully')
                    e.target.reset()
            }
            })
            .catch(error => {
            console.error('Error:', error);
        });




    }

    return (
        <div style={{margin:'127px 0px'}}>
           <Container>
                    <h3 className='banner_content_h3' style={{textAlign:'center', fontSize:"40px"}}> Add Your Product </h3>

            <form onSubmit={handleAdd}>

                <TextField
                required
                sx={{width:"60%"}}
                label="Product Name"
                onChange={e=>setProductName(e.target.value)}
                variant='standard'
                />
                <br />

                <TextField
                required
                sx={{width:"60%"}}
                label="Product Description"
                onChange={e=>setProductDescrip(e.target.value)}
                variant='standard'
                />
                <br />

                <TextField
                required
                sx={{width:"60%"}}
                label="Product Price"
                onChange={e=>setProductPrice(e.target.value)}
                variant='standard'
                />
                <br />

                <Input 
                    accept="image/*" 
                    id="contained-button-file"
                    type="file"
                    onChange={e=>setImage(e.target.files[0])}

                />
                <br />
                <br />


                <Box className='button_sty'>
                <Button variant="contained" type='submit'>
                    Add Product
                </Button>
                </Box>



            </form>
           </Container>
        </div>
    );
};

export default AddProducr;