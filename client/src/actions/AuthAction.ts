import { Action } from 'redux'
import { ActionType } from './ActionType'

export interface AuthAction extends Action<ActionType> {
    payload?: any
}