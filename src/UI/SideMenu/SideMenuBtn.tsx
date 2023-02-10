import React, {FC, ReactNode} from 'react'
import {Space } from 'antd';
import s from './SideMenu.module.css';

interface BtnProps {
    icon: ReactNode;
    title?: string;
    expanded: boolean;
}

const SideMenuBtn:FC<BtnProps> = ({icon, title, expanded}) => {

    return (
        expanded 
        ?
        <div className={s.btnWrapper}>
            <span className={s.icon}>{icon}</span>
            <span className={s.btnTitle}>{title}</span>
        </div>
        :
        <div className={[s.btnWrapper, s.expanded].join(' ')}>
            <span className={s.icon}>{icon}</span>
        </div>
    )
}

export default SideMenuBtn