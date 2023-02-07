import React, {FC} from 'react'
import { Space } from 'antd'
import s from './Navbar.module.css'
import SearchBar from '../../components/SearchBar'
import Logo from '../Logo/Logo'

const Navbar: FC = () => {
    return (
        <div className={s.wrapper}>

            <Space className={s.box}>
                <Logo/>
                <SearchBar/>
            </Space>

        </div>
    )
}

export default Navbar