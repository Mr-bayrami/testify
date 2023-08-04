import { Article } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react';
import { Status } from 'utils/data';

export type propsType ={
  title : String ;
  description : string ;
  status : string
}

function Task({title , description , status} : propsType) {
  let bgColor = '';
  (status === Status.ONPROGRESS) ? bgColor='#81D4FA' : 
  ((status === Status.DONE) ? bgColor='#81C784' : bgColor = '#FFC300');


  return (
    <div><Box display='flex' alignItems='center' gap={1} bgcolor={bgColor} borderRadius={2} padding={1}>
    
        <Article  sx={{color:'#526D82'}}/> 
      
      <Typography m={0} color="#475AD0" variant="h6" gutterBottom>
       {title}
      </Typography>
      
        </Box></div>
  )
}

export default Task