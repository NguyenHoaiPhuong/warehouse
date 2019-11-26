import { combineReducers } from "redux";
import { UserReducers } from './UserReducer'

export const reducers = combineReducers({
    user: UserReducers
});