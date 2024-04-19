import { ReactNode } from "react"

type Tag = "h1" | "h2" | "h3" | "p" | "span"

export interface Props {
    children: ReactNode
    tag?: Tag
    isCentered?: boolean
}

export default function Typography({ children, tag = "p", isCentered = false }: Props) {
    return (
        <>
        {
            tag === "h1" && <h1 className={`text-2xl font-medium mb-3 ${isCentered ? "text-center" : ""}`}>{children}</h1> ||
            tag === "h2" && <h2 className={`text-xl font-medium mb-3 ${isCentered ? "text-center" : ""}`}>{children}</h2> ||
            tag === "h3" && <h3 className={`text-lg font-medium mb-3 ${isCentered ? "text-center" : ""}`}>{children}</h3> ||
            tag === "p" && <p className={`text-base`}>{children}</p> ||
            tag === "span" && <span className={`text-sm`}>{children}</span>
        }
        </>
    )
}