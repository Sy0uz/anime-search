import { Descriptions } from 'antd'
import React, {FC} from 'react'
import s from './Footer.module.css'

const Footer:FC = () => {
    return (
        <footer className={s.wrapper}>
            <Descriptions>

            </Descriptions>
            <div>Made by Syouz</div>
            <a href="https://github.com/Sy0uz" target='_blank' className={s.link}>GitHub</a>
        </footer>
    )
}

export default Footer