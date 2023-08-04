import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'
import { useFetch } from './utils/utils';
import { myFilter } from './utils/filter';
import { Box, Card, Grid } from '@mui/material';
import Header from './components/Header';
import TaskBox from './components/TaskBox';
import { Done, New, OnProgress } from 'utils/data';
 
export interface dataProps {
  name : string;
  lastName : string;
  age :  number;
}
export type postsType = {
  id: number;
  title:string;
  body : string;
}


function App() {
  const AppName = 'Tasks'
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts');
  const data :dataProps ={
    name : 'Mohamad Reza' ,
    lastName : 'Bayrami',
    age : 35
  }

  useEffect(()=>{
    sessionStorage.setItem('New',JSON.stringify(New));
    sessionStorage.setItem('Done',JSON.stringify(Done));
    sessionStorage.setItem('OnProgress',JSON.stringify(OnProgress));

  },[])


  const [list , setList]=useState([]);
const deleteHandle=(id:number)=>{
setList(myFilter(list , id))
}
  useEffect(()=>{
    setList(posts);
  },[posts])
  return (
     <div className="App">
      <Header title={AppName} />
      <Outlet />
    




{/*       
     <blockquote cite="Benjamin Franklin">
         Tell me and I forget, teach me and I may remember, involve me and I learn.
      </blockquote>
      <h1>{list?.length}</h1>
       <ProjectsPage {...data}  /> 
<Grid container spacing={4}>
      {list?.map((item:postsType,index:number)=>(
        <>{item.id <10 && <TaskBox>
          <Grid item className='card' >
          <Box  >
         <Card variant='outlined' ><small style={{backgroundColor:"red", color:"white" , display:'inline' , textAlign:'center'}}>{item.id}</small>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
          <button onClick={()=> deleteHandle( item.id)} >delete</button></Card>
          </Box>
          </Grid>
          </TaskBox> }</>
        
      ))}

   </Grid> 
   <hr /> 
   */}
    </div>
  );
}

export default App;
