import { UserState, InitialUserState } from "../states/userState";
import { UserAction, UserActionType } from "../actions/userAction";

export function UserReducers(prevState: UserState = InitialUserState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionType.LOGIN_REQUEST:
            console.log(prevState)
            console.log(action.payload)
            return prevState
        default:
            return prevState
    }    
}