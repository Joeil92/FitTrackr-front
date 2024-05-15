import { ReactNode } from "react"

interface Props {
    children: ReactNode
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none" | "subgrid"
    gap?: 0 | 2 | 3 | 6 | 12 | 24 | 48
}

export default function GridContainer({ children, cols = "none", gap = 3 }: Props) {
    let className = "grid";

    if (cols) {
        className = className + ` grid-cols-${cols}`;
    }

    if (gap) {
        className = className + ` gap-${gap}`
    }

    return (
        <div className={className}>{children}</div>
    )
}