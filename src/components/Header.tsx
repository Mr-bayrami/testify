import React from 'react';
import AppBar from  '@mui/material/AppBar';
import Toolbar from  '@mui/material/Toolbar';
import Typography from  '@mui/material/Typography';
import {  Box, IconButton, ListItem, Menu } from '@mui/material';
import { Add, Apps } from '@mui/icons-material';

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
      <IconButton edge="end" color="inherit" aria-label="Add" sx={{ mr: 2 }}>
      <Add />
    </IconButton>
    <IconButton edge='start' color="inherit" aria-label='Menu' >
      <Apps />
    </IconButton>
    </Box></Toolbar>
  </AppBar></div>
  )
}

export default Header