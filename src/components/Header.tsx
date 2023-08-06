import React from 'react';
import AppBar from  '@mui/material/AppBar';
import Toolbar from  '@mui/material/Toolbar';
import Typography from  '@mui/material/Typography';
import {  Box, Button, IconButton, ListItem, Menu } from '@mui/material';
import { Add, Apps } from '@mui/icons-material';
import { Link } from 'react-router-dom';

type propsType ={
    title:string;
}
function Header({title} : propsType) {
  return (
    <div><AppBar  sx={{
        background :'#2B2730',
    }} position="static">
    <Toolbar variant="regular" sx={{display:"flex", justifyContent:'space-between'}}>
      <Typography variant="h6" color="inherit" component="div">
        {title}
      </Typography>
      <Box  >
      <Button variant='contained' color='info' aria-label="Add" startIcon={<Add />} sx={{ mr: 2 }}>
      <Link  to='/new' > Add Task  </Link>
    </Button>
    <IconButton edge='start' color="inherit" aria-label='Menu' >
     <Link to="/Tasks"><Apps /></Link> 
    </IconButton>
    </Box></Toolbar>
  </AppBar></div>
  )
}

export default Header