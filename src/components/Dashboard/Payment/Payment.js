

import { TextField,Container,Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UserOrder from '../UserOrder/UserOrder';






const Payment = () => {
        const {orderId}=useParams()
        const [order, setOrderPrice]=useState({})

      useEffect(()=>{
        fetch(`http://localhost:5000/orders/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrderPrice(data))
    },[orderId])

  // console.log(order._id)

    
    
    
    
    const initialInfo={phone:'', trx:''}
  

    const [payInfo, setpayInfo]=useState(initialInfo)

    const handleOnBlur=e=>{

        const field=e.target.name
        const value=e.target.value
        const newInfo={ ...payInfo }
        newInfo[field]=value
        setpayInfo(newInfo)
    }

    const d=new Date()
    const date=d.toLocaleDateString()

    const handleSubmit=e=>{
      e.preventDefault()

      
      
      // colect data  
      const payment={
            ...payInfo,
            name:order.name,
            email:order.email,
            productName:order.productName, 
            price:order.price, 
            date:date,
      }

      // console.log(payment)


      fetch('http://localhost:5000/payments',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(payment)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
          alert('Your payments successfull')

          // update order databse for payment
          const payment={
             payment_trx:payInfo.trx
          }
          
          const url=`http://localhost:5000/orders/${order._id}`
          fetch(url,{
            method:"PUT",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(payment)
          })

          .then(res=>res.json())
          .then(data=>console.log(data))

        }
      })

    }

    return (
        <>
           <Container>
           

         
           <h3 className='banner_content_h3' style={{textAlign:'center', fontSize:"40px"}}>  ===== Please Pay Manually: ===== </h3>
            
            <Box style={{textAlign:'center'}}>
            <form>
             
             <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Customer name:</label> <br />
            <TextField
             disabled
             sx={{width:'50%'}}
             id="outlined-disabled"
             value={order.name}
             size='small'
             />
             <br />
            

            <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Customer Email:</label> <br />
            <TextField
             disabled
             sx={{width:'50%'}}
             id="outlined-disabled"
             value={order.email}
             size='small'
             />
             <br />
            


            <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Product Name:</label> <br />
            <TextField
             disabled
             sx={{width:'50%'}}
             id="outlined-disabled"
             value={order.productName}
             size='small'
             />
             <br />
           

             <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Product Price:</label> <br />
            <TextField
            
             disabled
             sx={{width:'50%'}}
            
             value={order.price}
             size='small'
             />
             <br />
          

             <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Bkash Number</label> <br />
             <TextField
             required
             type="text"
             sx={{width:'50%'}}
             onBlur={handleOnBlur}
             id="outlined-disabled"
             name="phone"
             size='small'
             
             />
             <br />
            

             <label style={{color:'rgba(0, 0, 0, 0.38)'}}>Trx Id</label> <br />
             <TextField
             required
             type="text"
             onBlur={handleOnBlur}
             sx={{width:'50%'}}
             id="outlined-disabled"
             name="trx"
             size='small'
             
             />
             <br />
            

             <Box  className="button_sty" style={{textAlign:'center', margin:'10px'}}>

              <Button onClick={handleSubmit} variant='contained'><Link style={{textDecoration:'none'}} to={'/dashboard/checkout'}>Confirm</Link></Button>

          
          </Box>
            
            </form>
            </Box>

            
           </Container>

           
          
           

        </>
    );
};

export default Payment;













