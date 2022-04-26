import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {orderId}=useParams()

    const [orderPrice, setOrderPrice]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/orders/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrderPrice(data))
    },[orderId])

    
    
    return (
        <div>
            <h2>Id: {orderId}</h2>
            <h2>price {orderPrice.price}</h2>
            

        </div>
    );
};

export default Payment;