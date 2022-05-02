import { Button, Container, Input, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateProduct.css'


const UpdateProduct = () => {


    const [product, setProduct]=useState([])
    const {updateId}=useParams()

    useEffect(()=>{
        const url=`http://localhost:5000/products/${updateId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])


    const handleNameChange=e=>{

        const UpdateProductName=e.target.value
       

        const updateProduct={
            productName:UpdateProductName,
            productDescrip:product.productDescrip,
            productPrice:product.productPrice,
        }
        setProduct(updateProduct)
    }


    const handleDescripChange=e=>{
        const UpdateProductDescript=e.target.value

        const updateProduct={
            productName:product.productName,
            productDescrip:UpdateProductDescript,
            productPrice:product.productPrice,
        }
        setProduct(updateProduct)
    }

    const handlePriceChange=e=>{
        const UpdateProductPrice=e.target.value

        const updateProduct={
            productName:product.productName,
            productDescrip:product.productDescrip,
            productPrice:UpdateProductPrice,
        }
        setProduct(updateProduct)
    }


    const handleUpdate=e=>{

        const url=`http://localhost:5000/products/${updateId}`
       
        fetch(url,{

            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
            
        })
        
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount>0){
                alert('update successfully')
                setProduct({})
               
            }

            
        })
        e.preventDefault()
    }

    return (
        <div>
                  
           <Container>
           <h3 className='banner_content_h3' style={{textAlign:'center', fontSize:"40px"}}>  ===== Update Product ===== </h3>
            <form onSubmit={handleUpdate}>

            <TextField type="text"
            sx={{width:"40%"}}
             onChange={handleNameChange}
             value={product.productName || '' }
             variant="standard"
             label="Product Name"

             /> <br /><br />


            {/* <input type="text"
             onChange={handleDescripChange}
             value={product.productDescrip  || ''}

             /> <br /><br /> */}

             <TextareaAutosize type="text" rows="8" color='40'
              onChange={handleDescripChange}
              value={product.productDescrip  || ''}
              style={{ width: '40% ', height:'150px'}}
             />

             
             <br />

            <TextField  type="text"
            sx={{width:"40%"}}
             onChange={handlePriceChange}
             value={product.productPrice  || ''}
             variant="standard"
             label="Product Price"

             /> <br /><br />

                 

                <br />

             <Box className='cus_btn'>
                <input  type="submit" value="update"   /> 
             </Box>

            
            
            </form>
           </Container>
            
        </div>
    );
};

export default UpdateProduct;