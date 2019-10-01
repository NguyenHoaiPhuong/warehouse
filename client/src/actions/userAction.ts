import { Action } from 'redux'

export enum UserActionType {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
}

export interface UserAction extends Action<UserActionType> {
    payload?: any
}

export interface LoginInfo {
    username: string,
    password: string
}

/* Action creators */
export function login(username:string, password: string): UserAction {
    let loginInfo: LoginInfo = {
        username: username,
        password: password
    }
    let action: UserAction = {
        type: UserActionType.LOGIN_REQUEST,
        payload: loginInfo
    }
    return action
}