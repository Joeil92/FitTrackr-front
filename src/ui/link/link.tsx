import { ReactNode } from "react"

interface Props {
    children: ReactNode
    href: string
}

export default function Link({ children, href }: Props) {
    return (
        <a
            href={href}
            className="font-medium text-blue-500 hover:text-blue-600 transition-all"
        >{children}</a>
    )
}