export const editReducer=(state=null,action)=>{
    switch (action.type) {
        case 'EDIT_DETS':
            console.log(action.payload.Dets)
             return state=action.payload.Dets
        default:
           return state;
    }
}
