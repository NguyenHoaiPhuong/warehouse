import { Action } from 'redux'
import { ActionType } from './ActionType'

export interface UserAction extends Action<ActionType> {
    payload?: any
}

export interface LoginInfo {
    username: string,
    password: string
}

/* User Action creators */
export function login(username:string, password: string): UserAction {
    let loginInfo: LoginInfo = {
        username: username,
        password: password
    }
    let action: UserAction = {
        type: ActionType.LOGIN_REQUEST,
        payload: loginInfo
    }
    return action
}