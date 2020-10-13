import {editReducer} from './editReducer';
import {registerBusiness} from './registerBusiness';
import { combineReducers } from 'redux';

const ReducerContainer= combineReducers({
    buss : registerBusiness,
    editDets : editReducer
})

export default ReducerContainer