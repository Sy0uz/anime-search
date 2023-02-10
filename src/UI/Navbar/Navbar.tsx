import React, {FC} from 'react'
import { Space } from 'antd'
import s from './Navbar.module.css'
import SearchBar from '../../components/SearchBar'
import Logo from '../Logo/Logo'

const Navbar: FC = () => {
    return (
        <header className={s.wrapper}>

            <Space className={s.box}>
                <Logo/>
                <SearchBar/>
            </Space>

        </header>
    )
}

export default Navbar