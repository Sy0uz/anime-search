import {FC} from 'react'
import s from './Loader.module.css'
import { Spin } from 'antd'

const Loader:FC = () => {
    return (
        <div className={s.wrapper}>
            <Spin className={s.loader} size='large'/>
        </div>
    )
}

export default Loader