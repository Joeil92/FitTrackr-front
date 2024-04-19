import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Card({ children }: Props) {
    return (
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md p-6">{children}</div>
    )
}