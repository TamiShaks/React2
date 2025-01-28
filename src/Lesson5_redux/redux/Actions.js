import { ADDITION, REMOVMET } from "./ActionTyps";
 
export const removment =(id)=>({
    type:REMOVMET,payload:id
});
export const addition=(value)=>({
    type:ADDITION,payload:value
});