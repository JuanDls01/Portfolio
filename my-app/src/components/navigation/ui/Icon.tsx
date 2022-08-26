import { ReactNode } from "react"
import { IconContext } from "react-icons"

type Props = {
    children?: ReactNode,
    link: string
}

export const Icon = ({children, link}: Props) => {
    return (
        <IconContext.Provider value={{className:'w-6 h-6'}}>
          <a href={link} target="_blank" rel="noopener noreferrer" className='w-6 h-6'>
            {children}
          </a>
        </IconContext.Provider>
    )
}