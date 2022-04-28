import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

            <h2>==== Update product  {product.productName} ====</h2>
                <p>{product.productDescrip}</p>
                <p>{product.productPrice}</p>

            <form onSubmit={handleUpdate}>

            <input type="text"
             onChange={handleNameChange}
             value={product.productName || '' }

             /> <br /><br />


            <input type="text"
             onChange={handleDescripChange}
             value={product.productDescrip  || ''}

             /> <br /><br />

            <input type="text"
             onChange={handlePriceChange}
             value={product.productPrice  || ''}

             /> <br /><br />
            <input type="submit" value="update" />
            </form>
            
        </div>
    );
};

export default UpdateProduct;