import ShowTask from "./ShowTask";
import {useSelector} from 'react-redux';
import Task from "./Task";

export default function Screen()
{

    const recycleList= useSelector((state)=>state.bin.recyclebin);
    const taskList= useSelector((state)=>state.todos.todos);
    return(
        <>     <div>
             {recycleList.map((t,index)=>(
              <Task value={t.value} id={index} placement="bin"/>))}
        </div>
       
        <ShowTask>
        </ShowTask>
        {taskList.map((t,index)=>(
        <Task value={t.value} id={index} placement="todo" />))}
    </>
    )
}