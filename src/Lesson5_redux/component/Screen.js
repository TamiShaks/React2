import ShowTask from "./ShowTask";
import {useSelector} from 'react-redux';
import Task from "./Task";

export default function Screen()
{


    const taskList= useSelector((state)=>state.todos);
    return(
        <>
        <ShowTask>
        </ShowTask>
        {taskList.map((t,index)=>(
        <Task value={t.value} id={index} />))}
        </>
    )
}