import { combineReducers } from "redux";
import { UserReducers } from './userReducer'

export const reducers = combineReducers({user: UserReducers});