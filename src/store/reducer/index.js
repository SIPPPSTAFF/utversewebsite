import { menuReducer } from "./menuReducer";
import { combineReducers } from 'redux';

const reducer = combineReducers({ menuReducer })

export default reducer;