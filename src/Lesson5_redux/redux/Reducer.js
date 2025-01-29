// import Task from "../component/Task";
// import { ADDITION, REMOVMET } from "./ActionTyps";

// const initialState={
//     todos  :[],
//     counter:0,
// };

// export const todosReduser =(state =initialState, action)=>
// {

//     switch(action.type)
//     {
//         case REMOVMET:
//             if(counter!=action.payload)
//                todos[action.payload].value=todos[counter].value;             
//             todos.pop();
//             counter=counter-1;
//             return{...state,todos:[...todos]};
//         case ADDITION:
//             const s=action.payload;
//             counter=counter+1;
//             return{...state, todos :[...todos,<Task value={s}/>]};
//         default:
//             return state;
//     }
// }
import Task from "../component/Task";
import { ADDITION, REMOVMET } from "./ActionTyps";

const initialState = {
    todos: [],
 
};

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVMET:
            // Access todos and counter from state
            const todosAfterRemoval = [...state.todos];
            if (action.payload >= 0 && action.payload < todosAfterRemoval.length) {
                todosAfterRemoval.splice(action.payload, 1); // Remove the todo
            }
            return {
                ...state,
                todos: todosAfterRemoval,
                counter: todosAfterRemoval.length // Update counter based on the new length
            };
        
        case ADDITION:
            const newTaskValue = action.payload;
            const newTask = { value: newTaskValue };
            return {
                ...state,
                todos: [...state.todos, newTask],
                counter: state.counter + 1 // Increment counter
            };
        
        default:
            return state;
    }
};