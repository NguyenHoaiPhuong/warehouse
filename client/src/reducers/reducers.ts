import { combineReducers } from "redux";
import { UserReducers } from './UserReducer'
import { AuthReducer } from './AuthReducer'

export const reducers = combineReducers({
    user: UserReducers,
    auth: AuthReducer 
});