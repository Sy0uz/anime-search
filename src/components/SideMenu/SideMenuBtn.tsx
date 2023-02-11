import {FC, ReactNode} from 'react'
import s from './SideMenu.module.css';
import { Link } from 'react-router-dom';

interface BtnProps {
    icon: ReactNode;
    title?: string;
    expanded: boolean;
    show: boolean;
    path: string;
}

const SideMenuBtn:FC<BtnProps> = ({icon, title, expanded, show, path}) => {

    return (
        expanded 
        ?
        <Link to={path} className={[s.btnWrapper, s.expanded].join(' ')}>
            <span className={s.icon}>{icon}</span>
            {show ? <span className={s.btnTitle}>{title}</span> : <></>}
        </Link>
        :
        <Link to={path} className={s.btnWrapper}>
            <span className={s.icon}>{icon}</span>
        </Link>
    )
}

export default SideMenuBtn