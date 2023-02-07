import React from 'react'
import s from './Logo.module.css'
import {GithubOutlined} from '@ant-design/icons'

const Logo = () => {
    return (
        <div className={s.logo}>
            <GithubOutlined />
            <span className={s.name}>AnimeSearch</span>
        </div>
    )
}

export default Logo