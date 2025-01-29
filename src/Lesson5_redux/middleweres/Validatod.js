
 const ValidatorMiddieware =store => next => action=> {
    if(action.type=='ADDITION')
    if(action.payload=="")
       return;
    next(action);
};
export default ValidatorMiddieware;