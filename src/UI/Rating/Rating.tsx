import  {FC} from 'react'
import { roundRate } from '../../utlis/roundRate'
import s from './Rating.module.css'

interface RateProps {
    score: number;
    scored_by: number;
}

const Rating: FC<RateProps> = ({score, scored_by}) => {

    const rate = roundRate(score);

    return (
        <div className={s.wrapper}>
            <span className={s.score}>{rate}</span>
            <span className={s.scoredBy}>{scored_by.toLocaleString()} users</span>
        </div>
    )
}

export default Rating