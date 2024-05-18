import { ReactNode } from "react"

type Type = 'primary' |
    'primary-outline' |
    'danger' |
    'danger-outline' |
    'warning' |
    'warning-outline' |
    'success' |
    'success-outline'

interface Props {
    children: ReactNode
    onClick: () => void
    type?: Type
}

export default function Button({ children, onClick, type = "primary" }: Props) {
    let className = ""

    if (type === "primary") {
        className = "p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all"
    }

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}