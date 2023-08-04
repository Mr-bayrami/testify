import axios from "axios";
import { useEffect, useState } from "react";
import { postsType } from "../App";


export const useFetch=(URL:string)=>{
    const [data , setDatat]=useState<any>();
    const getData=async()=>{
        await axios.get(URL)
        .then(res => setDatat(res.data))
    }
    
    useEffect(()=>{
            getData();
    },[])

    sessionStorage.setItem('data', JSON.stringify(data));

    return data;
}