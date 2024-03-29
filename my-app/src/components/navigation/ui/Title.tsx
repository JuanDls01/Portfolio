import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Title = ({children}: Props) => {
    return (
        <h1 className="font-archivo font-black my-2 md:my-4 text-2xl md:text-5xl xl:text-6xl">
            {children}
        </h1>
    )
}