import { ReactNode } from "react"

interface Props {
    children: ReactNode
    direction?: "row" | "row-reverse" | "col" | "col-reverse"
    justify?: "normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch"
    justifyItem?: "start" | "end" | "center" | "stretch"
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch"
    gap?: 0 | 2 | 3 | 6 | 12 | 24 | 48
}

export default function FlexContainer({ children, direction = "col", justify = "normal", justifyItem = "start", alignItems = "start", gap = 3 }: Props) {
    let className = "flex";

    if (direction) {
        className = className + ` flex-${direction}`;
    }

    if (justify) {
        className = className + ` justify-${justify}`;
    }

    if (justifyItem) {
        className = className + ` justify-items-${justifyItem}`
    }

    if (alignItems) {
        className = className + ` items-${alignItems}`;
    }

    if (gap) {
        className = className + ` gap-${gap}`
    }

    return (
        <div className={className}>{children}</div>
    )
}