import { AuthState, InitialAuthState } from "../states/AuthState";
import { ActionType } from "../actions/ActionType";
import { AuthAction } from "../actions/AuthAction";

export function AuthReducer(prevState: AuthState = InitialAuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case ActionType.UPDATE_TOKEN_PAIR:
            let nextState: AuthState = Object.assign({}, prevState, action.payload as AuthState)
            return nextState
        default:
            return prevState
    }
}