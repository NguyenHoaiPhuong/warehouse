export const IsAuthenticated = (username: string, password: string) => {
    // fake authentication
    if (username === 'admin' && password === 'admin') {
        console.log('Hahaha')
        return true
    }

    return false
}