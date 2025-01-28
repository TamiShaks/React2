import { useState } from "react";
import { addition,  } from "../redux/Actions";
import {useDispatch} from "react";
export default function ShowTask()
{

  const [input,setInput]= useState(0);
  const dispatch= useDispatch();
  const handleAddtask=()=>
  {
    dispatch(addition(input));
    setInput("");
  }
    return(<> 
         <label>insert your task</label>
         <input value={input} onChange={e=> setInput(e.target.value)} />
         <button onClick={handleAddtask}>add the item</button>
        
         
    </>) ;
}