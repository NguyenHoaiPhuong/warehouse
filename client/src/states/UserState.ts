export interface UserState {
    firstName: string,
    lastName: string,
    userName: string,
    email?: string,
    password: string
}

export const InitialUserState: UserState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
}