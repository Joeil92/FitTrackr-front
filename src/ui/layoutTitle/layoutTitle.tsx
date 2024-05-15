import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function LayoutTitle({ children }: Props) {
    return (
        <h1 className="text-3xl font-semibold mb-6">{children}</h1>
    )
}