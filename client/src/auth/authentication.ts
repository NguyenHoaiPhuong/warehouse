import axios from 'axios'
import { store } from '../store/store'
import { ActionType } from '../actions/ActionType'
import { AuthAction } from '../actions/AuthAction'

export const ServerHost = "localhost"
export const ServerPort = "9001"

export const IsAuthenticated = (username: string, password: string) => {
    let user = {
        UserName: username,
        Password: password
    }

    axios.post("http://" + ServerHost + ":" + ServerPort +  "/apis/internal/user/login", user).then((response) => {
        let {access_token, refresh_token} = response.data
        let action: AuthAction = {
            type: ActionType.UPDATE_TOKEN_PAIR,
            payload: {
                accessToken: access_token,
                refreshToken: refresh_token
            }
        }
        store.dispatch(action)

        return true
    })  

    return false
}