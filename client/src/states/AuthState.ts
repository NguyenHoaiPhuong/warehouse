export interface AuthState {
    accessToken: string,
    refreshToken: string
}

export const InitialAuthState: AuthState = {
    accessToken: "",
    refreshToken: ""
}