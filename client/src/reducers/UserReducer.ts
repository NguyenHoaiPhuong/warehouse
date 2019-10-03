import { UserState, InitialUserState } from "../states/UserState";
import { ActionType } from "../actions/ActionType";
import { UserAction } from "../actions/UserAction";

export function UserReducers(prevState: UserState = InitialUserState, action: UserAction): UserState {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST:
            console.log(prevState)
            console.log(action.payload)
            return prevState
        case ActionType.LOGIN_SUCCESS:
            console.log(prevState)
            console.log(action.payload)
            return prevState
        case ActionType.LOGIN_FAIL:
            console.log(prevState)
            console.log(action.payload)
            return prevState
        default:
            return prevState
    }
}