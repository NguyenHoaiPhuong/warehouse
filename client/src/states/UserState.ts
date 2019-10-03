export interface UserState {
    firstName: string,
    lastName: string,
    userName: string,
    email?: string,
}

export const InitialUserState: UserState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
}