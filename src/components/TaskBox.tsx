import { Box } from '@mui/material'
import React, { Children } from 'react'

function TaskBox(props:any) {
  return (
    <><Box mt={3} bgcolor='#212A3E' padding={5} height='100vh' borderRadius={3} display='flex' gap={1} flexDirection='column'>
        {props.children}
      </Box></>
  )
}

export default TaskBox