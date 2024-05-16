import { CSSProperties, ReactNode } from "react"
interface Props {
    children: ReactNode
    justify?: "normal" | "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch"
    justifyItem?: "start" | "end" | "center" | "stretch"
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch"
    gap?: 0 | 2 | 3 | 6 | 12 | 24 | 48
    className?: string
}

export default function FlexContainer({ children, justify = "start", alignItems = "center", justifyItem = "start", gap = 3, className = "" }: Props) {
    const style: CSSProperties = {
        display: "flex",
        justifyContent: justify,
        justifyItems: justifyItem,
        alignItems: alignItems,
        gap: gap
    }

    return (
        <div className={className} style={style}>{children}</div>
    )
}