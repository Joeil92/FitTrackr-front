import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none"
    gap?: 0 | 2 | 3 | 6 | 12 | 24 | 48
    className?: string
}

export default function GridContainer({ children, cols = "none", gap = 3, className = "" }: Props) {
    const style: CSSProperties = {
        display: "grid",
        gridTemplateColumns: cols === "none" ? "none" : `repeat(${cols}, minmax(0, 1fr))`,
        gap: gap
    }

    return (
        <div className={className} style={style}>{children}</div>
    )
}