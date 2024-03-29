import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const SubTitle = ({children}: Props) => {
    return (
        <h3 className="font-archivo font-semibold text-yellow-600 my-4 md:my-6 text-lg xs:text-xl md:text-3xl xl:text-4xl">
            {children}
        </h3>
    )
}