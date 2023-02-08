import { Button, Divider} from 'antd';
import React, {FC, useState} from 'react'
import s from './SideMenu.module.css'
import {MenuOutlined, CloseOutlined, FireOutlined, HeartOutlined, MailOutlined} from '@ant-design/icons'
import SideMenuBtn from './SideMenuBtn';

const SideMenu:FC = () => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const expandMenuHandler = () => setExpanded(!expanded)

    return (
        <aside className={expanded ? [s.wrapper, s.active].join(' ') : s.wrapper}>

            <div className={s.sidebar}>
                <Button onClick={expandMenuHandler} type='ghost' size='large' className={s.ctrlBtn} icon={expanded ? <CloseOutlined /> : <MenuOutlined/>}/>
                <Divider style={{margin:'6px 0'}}/>

                <SideMenuBtn icon={<FireOutlined />} title='Аниме'/>
                <SideMenuBtn icon={<HeartOutlined />}/>
                <SideMenuBtn icon={<MailOutlined />}/>
            </div>

        </aside>
    )
}

export default SideMenu