import axios from 'axios'
import LocalStorageService from './LocalStorage'
import { IAuthToken } from './Auth'

const CONFIG = require('../config/config.json');

export const ServerHost = CONFIG.serverHost
export const ServerPort = CONFIG.serverPort
const loginPath = CONFIG.loginPath


export const Login = async (username: string, password: string) => {
    let user = {
        UserName: username,
        Password: password
    }
    let url = "http://" + ServerHost + ":" + ServerPort + loginPath    
    
    await axios.post(url, user).then((response) => {
        let {access_token, refresh_token} = response.data
        let token: IAuthToken = {
            access_token: access_token,
            refresh_token: refresh_token
        }
        LocalStorageService.getService().setToken(token)
    })
}