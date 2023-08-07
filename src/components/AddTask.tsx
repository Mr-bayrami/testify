import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { HTMLAttributes, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Status } from 'utils/data'
import { propsType } from './Task'
import ModalSnipper from './ModalSnipper'

function AddTask() {
    
    const [open , setOpen]=useState(false);
  const navigate = useNavigate();
  const [New , setNew] = useState<propsType[]>(JSON.parse(sessionStorage.getItem('New')!));
  const [newTask ,setNewTask]=useState<propsType >({
    title:'',
    description : '',
    status : Status.NEW ,
  });

  useEffect(()=>{
    sessionStorage.setItem('New',JSON.stringify(New))
    setOpen(false)
    
  },[New])

  

  async function AddNewTask(){await setNew([...New,newTask])
    
  } 

  async function setToSession(n:propsType[]){
    await sessionStorage.setItem('New',JSON.stringify(n));
    
  } 

 
  const changeHandler = (e:any)=>{
    console.log(e.target.value)
    e.target.id==='title' && setNewTask((prev)=>({...prev,title:e.target.value}))
    e.target.id==='description' && setNewTask((prev)=>({...prev,description:e.target.value}))
  
  }

   const OnSave =async(e:any)=>{
    e.preventDefault();
    setOpen(true);
   AddNewTask();
   //navigate('/Tasks');
   setNewTask(prev => ({...prev , title : ''}));
   setNewTask(prev => ({...prev , description : ''}));
  }
  return (
    <div><Container>
      <Box boxShadow={2} display='flex' bgcolor='lightcyan' flexDirection='column' mt={6} gap={3} p={4} borderRadius={3}>
        <TextField value={newTask.title} onChange={(e)=> changeHandler(e)}   id='title' fullWidth color='primary' label="Title"  />
        <TextField value={newTask.description} onChange={(e)=> changeHandler(e)}  fullWidth color='primary' id='description'
          label="Multiline"
          multiline
          rows={4}
         
        />
        <Box display='flex' justifyContent='flex-end' gap={3} >
          <Button variant='outlined'> cancel </Button>
          <Button variant='contained' onClick={(e)=> OnSave(e)}>save </Button>
        </Box>
      </Box>
    </Container>
    <ModalSnipper open={open}/>
    </div>
  )
}

export default AddTask