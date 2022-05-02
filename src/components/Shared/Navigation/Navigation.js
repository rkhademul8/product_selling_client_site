import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Navigation.css'


const Navigation = () => {
  const {user,logout}=useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar className='nav_bg' position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className='navbarLink' variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to='/home'>Home</Link>
             <Link to='/about'>About</Link>
             <Link to='/contact'>Contact</Link>


            </Typography>

          <Typography className='navbarLink'>
          {
              user?.email &&

            
                <Link to={'/dashboard/userorder'}>Dashboard</Link>

              
             
            }

            

            {
              user?.email ?
              <Button style={{color:'white',fontSize:'20px', padding:'0px'}} onClick={logout}>Logout</Button>:
              <Link to={'/login'}>Login</Link>
            }
            
          </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;