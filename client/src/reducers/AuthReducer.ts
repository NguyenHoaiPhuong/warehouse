import { AuthState, InitialAuthState } from "../states/AuthState";
import { ActionType } from "../actions/ActionType";
import { AuthAction } from "../actions/AuthAction";

export function AuthReducer(prevState: AuthState = InitialAuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case ActionType.UPDATE_TOKEN_PAIR:
            // let nextState: AuthState = Object.assign({}, prevState, action.payload as AuthState)
            let nextState: AuthState = {
                ...prevState,
                accessToken: (action.payload as AuthState).accessToken,
                refreshToken: (action.payload as AuthState).refreshToken

            }
            return nextState
        default:
            return prevState
    }
}