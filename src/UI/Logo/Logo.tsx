import React from 'react'
import s from './Logo.module.css'
import {GithubOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <Link className={s.logo} to={'/'}>
            <GithubOutlined />
            <span className={s.name}>AnimeSearch</span>
        </Link>
    )
}

export default Logo