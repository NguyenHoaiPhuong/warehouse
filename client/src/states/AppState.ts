import { UserState, InitialUserState } from './UserState'
import { AuthState, InitialAuthState } from './AuthState'

export interface AppState {
    auth: AuthState,
    user: UserState
}

export const InitialAppState: AppState = {
    auth:  InitialAuthState,
    user: InitialUserState
}