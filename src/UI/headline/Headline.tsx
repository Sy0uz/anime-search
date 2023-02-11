import React, {FC} from 'react'
import s from './Headline.module.css'

interface HeadlineProps {
    maxWidth?: number;
    marginBottom?: number;
    fontSize?: number;
    title: string;
}

const Headline: FC<HeadlineProps> = ({title, marginBottom, maxWidth, fontSize}) => {
    return (
        <div style={{maxWidth, marginBottom, fontSize}} className={s.header}>{title}</div>
    )
}

export default Headline