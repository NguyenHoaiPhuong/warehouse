import { AuthState, InitialAuthState } from "../states/AuthState";
import { ActionType } from "../actions/ActionType";
import { AuthAction } from "../actions/AuthAction";

export function AuthReducer(prevState: AuthState = InitialAuthState, action: AuthAction): AuthState {
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