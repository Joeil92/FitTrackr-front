import { ReactNode } from "react"

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span"

export interface Props {
    children: ReactNode
    tag?: Tag
}

export default function Typography({ children, tag = "p" }: Props) {
    return (
        <>
        {
            tag === "h1" && <h1>{children}</h1> ||
            tag === "h2" && <h2>{children}</h2> ||
            tag === "h3" && <h3>{children}</h3> ||
            tag === "h4" && <h4>{children}</h4> ||
            tag === "p" && <p>{children}</p> ||
            tag === "span" && <span>{children}</span>
        }
        </>
    )
}