import { ADDITION, REMOVMET ,ADDITIONRECYCLEBIN,REMOVMETEVER} from "./ActionTyps";
 
export const removment =(id,value)=>({
    type:REMOVMET,payload:{id,value}
});
export const addition=(value)=>({
    type:ADDITION,payload:value
});
// export const additionrecyclebil=(value)=>({
//     type:ADDITIONRECYCLEBIN,payload:value
// });
export const removmentever =(id)=>({
    type:REMOVMETEVER,payload:id
});