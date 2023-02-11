import React, {FC} from 'react'
import s from './Wrapper.module.css'

interface WrapperProps extends React.PropsWithChildren {
    className?: string;
}

const Wrapper: FC<WrapperProps> = ({className, children}) => {
    return (
        <article className={className ? [s.wrapper, className].join(' ') : s.wrapper}>
            {children}
        </article>
    )
}

export default Wrapper