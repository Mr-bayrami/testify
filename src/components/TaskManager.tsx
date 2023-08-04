import Grid from '@mui/material/Grid'
import TaskBox from './TaskBox'
import React ,{useEffect , useState} from 'react'
import Task, { propsType } from './Task'


function TaskManager() {
    const [Done , setDone] = useState<propsType[]>([]);
    const [New , setNew] = useState<propsType[]>([]);
    const [OnProgress , setOnProgress] = useState<propsType[]>([]);
        useEffect(()=> {
            setDone(JSON.parse(sessionStorage.getItem('Done')!));
            setNew(JSON.parse(sessionStorage.getItem('New')!));
            setOnProgress(JSON.parse(sessionStorage.getItem('OnProgress')!));
        },[])
  return (
    <div>  <Grid container spacing={2}>
    <Grid item xs={4}><TaskBox>
    {New?.map(task=>(<Task {...task} />))}
  </TaskBox></Grid>
    <Grid item xs={4}><TaskBox>
    {OnProgress?.map(task=>(<Task {...task} />))}
  </TaskBox></Grid>
    <Grid item xs={4}><TaskBox>
   {Done?.map(task=>(<Task {...task} />))} 
  </TaskBox></Grid>
  </Grid></div>
  )
}

export default TaskManager