import { Button, Input, TextField } from '@mui/material';
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
                e.target.reset()
            }
            })
            .catch(error => {
            console.error('Error:', error);
        });




    }

    return (
        <div>
            <h2>Add product</h2>

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


                
                <Button variant="contained" type='submit'>
                    Add
                </Button>



            </form>
        </div>
    );
};

export default AddProducr;