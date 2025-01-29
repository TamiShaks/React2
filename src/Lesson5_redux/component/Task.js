import { useSelector,useDispatch} from "react-redux";

import { removment } from "../redux/Actions";
import { removmentever } from "../redux/Actions";
export default function Task(props)
{
// {   const counter=useSelector((state) => state.counter); 
   
   const dispatch= useDispatch();
   function sending(placement)
   {
    if(placement=="bin")
    {
      dispatch(removment(props.id,props.value));
    }
    else dispatch(removmentever(props.id,props.value));
   }
    return(
        <>
        
          <p>{props.value}</p>
          <button onClick={sending(props.placement)}>remove the task</button>
        </>
    )
}