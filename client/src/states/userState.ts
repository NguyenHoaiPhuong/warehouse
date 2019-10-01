export interface UserState {
    firstName: string,
    lastName: string,
    userName: string,
    email?: string,
    isAuthenticated: boolean
}

export const InitialUserState: UserState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    isAuthenticated: false
}