// const data={
//     bname : 'Amazon',
//     bowner : 'Lab',
//     members : '5',
//     type : 'sales'
// }

// const data1={
//     bname : 'Flipkart',
//     bowner : 'Dor',
//     members : '3',
//     type : 'Sab kch'
// }
export const registerBusiness=(state=[],action)=>{
    switch (action.type) {
        case 'NEW_BUSINESS':
            return state.concat(action.payload.Dets)
        case 'REMOVE_BUSINESS' :
            let remaining = action.payload.Dets
            state=[]
            state.push(...remaining)
            return state
            case 'EDITED' : 
            console.log(action.payload.Dets)
            return state = action.payload.Dets
        default:
            return state;
    }
}
