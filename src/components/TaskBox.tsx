import { Box } from '@mui/material'
import React, { Children } from 'react'
import { onDropHandler } from 'utils/functions'

function TaskBox(props:any) {
  return (
    <><Box onDrop={()=> onDropHandler(props.title)} mt={3} bgcolor='#212A3E' padding={5} height='100vh' borderRadius={3} display='flex' gap={1} flexDirection='column'>
       <h3>{props.title}</h3>
        {props.children}
      </Box></>
  )
}

export default TaskBox