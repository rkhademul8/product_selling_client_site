import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const UserOrder = () => {

    const {user}=useAuth()

    const [userOrder, serUserOrder]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>serUserOrder(data))
    },[])
    return (
        <div>
            <h2>YOur Order {userOrder.length}</h2>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrder.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right">{order.name}</TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.phone}</TableCell>
              <TableCell align="right">{order.productName}</TableCell>
              <TableCell align="right">{order.date}</TableCell>
              <TableCell align="right">{order.price}</TableCell>
              <TableCell align="right">{order.payment ? 'Paid':
              <Link to={`/dashboard/payment/${order._id}`}> <Button variant='conteined'>Pay</Button> </Link>
              
              }</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default UserOrder;