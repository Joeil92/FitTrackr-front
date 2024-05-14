export interface DecodedToken {
    user: User
    exp: number
    iat: number
}


export interface User {
    id: number
    email: string
    firstname: string
    lastname: string
}