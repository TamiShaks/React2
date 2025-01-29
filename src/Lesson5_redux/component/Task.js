import { useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import { removment } from "../redux/Actions";
export default function Task(props)
{
// {   const counter=useSelector((state) => state.counter); 
   
    const dispatch= useDispatch();
    console.log(props.value);
    console.log(props.id);
    return(
        <>
        
          <p>{props.value}</p>
          <button onClick={()=>dispatch(removment(props.id))}>remove the task</button>
        </>
    )
}