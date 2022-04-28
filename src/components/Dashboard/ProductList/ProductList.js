import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import UpdateProductModal from '../UpdateProductModal/UpdateProductModal';


const ProductList = () => {

    const [products, setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })

    // product delete handle
    const handleDelete=id=>{

        const proceed=window.confirm('Are you sure !! you want to delete')

        if(proceed){
            const url=`http://localhost:5000/products/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{

                if(data.deletedCount > 0){
                    alert('deleted successfully ')
                    const remainingUsers=products.filter(product=>product._id !==id)
                    setProduct(remainingUsers)
                }
            })
        }
     
    }

 // This are modal state
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);

    const handleOpen = (id) => {
      console.log(id)
      setOpen(true);
    }



    return (
        <>
            <h2> ===== Product list =====</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Img</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right">
                  <img style={{width:"100px" , height:"100px"}}  src={`data:image/jpeg;base64,${product.image}`}/>
              </TableCell>
              <TableCell align="right">{product.productName}</TableCell>
              <TableCell align="right">{product.productPrice} Tk</TableCell>

              <TableCell align="right">
              {
                  <Box>
                      <Button onClick={()=> handleOpen (product._id)} >Update</Button>
                      <Button onClick={()=> handleDelete(product._id)} variant='contained'>Delete</Button> 
                      <Link to={`/dashboard/update/${product._id}`}><Button variant="contained">Update</Button></Link>

                  </Box>
              }

                
                

              
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                <UpdateProductModal
                    open={open}
                    handleClose={handleClose}
                    products={products}
      
                    >
      
                    </UpdateProductModal>
                
              
              
             
              


        </>
    );
};

export default ProductList;