import axios from 'axios'
import { store } from '../store/store'
import { ActionType } from '../actions/ActionType'
import { AuthAction } from '../actions/AuthAction'

const CONFIG = require('../config/config.json');

export const ServerHost = CONFIG.serverHost
export const ServerPort = CONFIG.serverPort
const loginPath = CONFIG.loginPath

export const Login = async (username: string, password: string) => {
    let user = {
        UserName: username,
        Password: password
    }
    let bRes = false
    let url = "http://" + ServerHost + ":" + ServerPort + loginPath
    
    await axios.post(url, user).then((response) => {
        let {access_token, refresh_token} = response.data
        let action: AuthAction = {
            type: ActionType.UPDATE_TOKEN_PAIR,
            payload: {
                accessToken: access_token,
                refreshToken: refresh_token
            }
        }
        store.dispatch(action)
        
        bRes = true
    })  

    return bRes
}