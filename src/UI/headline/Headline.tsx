import React, {FC} from 'react'
import s from './Headline.module.css'

interface HeadlineProps {
    maxWidth?: number;
    marginBottom?: number;
    title: string;
}

const Headline: FC<HeadlineProps> = ({title, marginBottom, maxWidth}) => {
    return (
        <div style={{maxWidth, marginBottom}} className={s.header}>{title}</div>
    )
}

export default Headline