import React from 'react';
import { Route , createBrowserRouter ,createRoutesFromElements} from "react-router-dom";
import App from '../App';
import AddTask from '../components/AddTask';
import TaskManager from 'components/TaskManager';


 const MainRouter  = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>} >
    <Route path="/new" element ={<AddTask/>} />
    <Route path="/Tasks" element ={<TaskManager/>} />
    </Route>
))

export default MainRouter;