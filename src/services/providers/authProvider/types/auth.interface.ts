import { User } from "./user.interface"

export interface AuthContextProps {
    isConnected: boolean
    user: User | null,
    login: (t: string) => void
    logout: () => void
}

export interface AuthState {
    isConnected: boolean
    user: User | null,
}