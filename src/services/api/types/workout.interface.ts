import { User } from "./user.interface"

export interface Workout {
    id: number
    name: string
    user: User
    createdAt: string
}