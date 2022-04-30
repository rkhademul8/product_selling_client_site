

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51KlnlnKBtwXMZAFFlFkPHf0D5qO2HzJgX6TcGVMZ08LTY2jJcn30sIVUg4FhCnq9Pa7zCTAFNKcooxlB2Wd7fdMD00jUdjPMeC')

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
            <h2>Please Pay for: {} </h2>
            <h4>Pay: ${orderPrice.price}</h4>

             <Elements stripe={stripePromise}>
                <CheckoutForm
                    
                />
            </Elements>
        </div>
    );
};

export default Payment;













// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';
// import {loadStripe} from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';


// const stripePromise = loadStripe('pk_test_51KlnlnKBtwXMZAFFlFkPHf0D5qO2HzJgX6TcGVMZ08LTY2jJcn30sIVUg4FhCnq9Pa7zCTAFNKcooxlB2Wd7fdMD00jUdjPMeC');

// const Payment = () => {
//     const {orderId}=useParams()

//     const [orderPrice, setOrderPrice]=useState({})

    
//     useEffect(()=>{
//         fetch(`http://localhost:5000/orders/${orderId}`)
//         .then(res=>res.json())
//         .then(data=>setOrderPrice(data))
//     },[orderId])

    
    
//     return (
//         <div>
//             <h2>Id: {orderId}</h2>
//             <h2>price {orderPrice.price}</h2>
            
//             <Elements stripe={stripePromise}>
//             <CheckoutForm />
//             </Elements>

//         </div>
//     );
// };

// export default Payment;





