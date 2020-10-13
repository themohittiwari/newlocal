import {NEW_BUSINESS} from '../actionTypes';
import {REMOVE_BUSINESS} from '../actionTypes';
import {EDIT_DETS} from '../actionTypes';
import {EDITED} from '../actionTypes';

export const registerAction=(newbusiness)=>({
    type : NEW_BUSINESS,
    payload : { Dets : newbusiness  }
})

export const removeAction=(remaining)=>({
    type : REMOVE_BUSINESS,
    payload : { Dets : remaining   }
})

export const editAction=(details)=>({
    type : EDIT_DETS,
    payload : { Dets : details }
})

export const editedAction=(details)=>({
    type : EDITED,
    payload : { Dets : details }
})