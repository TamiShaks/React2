import { useSelector,useDispatch} from "react";
import { useState } from "react";
import { removment } from "../redux/Actions";
export default function Task(props)
{    const counter=useSelector((state) => state.counter); 
    const [id,setId]= useState(counter);
    const dispatch= useDispatch();
    return(
        <>
        
          <p>{props.value}</p>
          <button onClick={()=>dispatch(removment(props.id))}>remove the task</button>
        </>
    )
}