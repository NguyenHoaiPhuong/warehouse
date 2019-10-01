import { combineReducers } from "redux";
import { rootReducer as usersReducers } from "../data/users";

export const reducers = combineReducers({
    users: usersReducers
});