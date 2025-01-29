import ValidatorMiddieware from '../middleweres/Validatod';
import{createStore , combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import { todosReducer } from "./Reducer";
import { recycleReducer } from './RecycleReducer';

const rootreducer= combineReducers(
  { bin : recycleReducer ,
    todos: todosReducer,
}
);
export const store= createStore(rootreducer ,applyMiddleware(ValidatorMiddieware));
export default store;