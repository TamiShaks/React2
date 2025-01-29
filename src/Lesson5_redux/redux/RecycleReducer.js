import Task from "../component/Task";
import { REMOVMET,ADDITIONRECYCLEBIN, REMOVMETEVER } from "./ActionTyps";

const initialState = {
   recyclebin:[],
};

export const recycleReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVMETEVER:
            // Access todos and counter from state
            const todosAfterRemoval = [...state.recyclebin];
            if (action.payload >= 0 && action.payload < todosAfterRemoval.length) {
                todosAfterRemoval.splice(action.payload, 1); // Remove the todo
            }
            return {
                ...state,
                recyclebin: todosAfterRemoval,
               
            };
        
        case REMOVMET:
            const newTaskValue = action.payload.value;
            const newTask = { value: newTaskValue };
            return {
                ...state,
                recyclebin: [...state.recyclebin, newTask],
                
            };
        
        default:
            return state;
    }
};