import { combineReducers } from "redux";
import { rootReducer as usersReducers } from "../data/users";

export const reducers = combineReducers({
    utility: UtilityReducer,
    authentication: AuthenticationReducer,
    users: usersReducers,
    materials: materialsReducers,
    mail: mailReducers
});