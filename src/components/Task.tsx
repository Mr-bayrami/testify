import { ArrowForward, Article, PanoramaFishEye } from '@mui/icons-material'
import { Box, Typography,Button } from '@mui/material'
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
  const clickHandler=()=> console.log('Clicked');

  return (
    <div><Box display='flex' width='100%' justifyContent='space-between'  gap={1} bgcolor={bgColor} borderRadius={2} padding={1}>
      <Box display='flex' alignItems='center'><Article  sx={{color:'#526D82'}}/> 
      <Typography m={0} fontSize={16} color="#475AD0" variant="h6" gutterBottom>
       {title}
      </Typography></Box><Button variant='text' startIcon={<ArrowForward/>}  onClick={clickHandler} ></Button>
        </Box></div>
  )
}

export default Task