import { useState } from "react";
import { postsType } from "../App";

export const myFilter:any = (list :postsType[] , id : number)=>{
let p :postsType[]=list.filter((item)=> item.id !== id)
return p;
}