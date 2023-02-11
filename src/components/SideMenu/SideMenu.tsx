import { Button, Divider} from 'antd';
import {FC, useState, useEffect} from 'react'
import s from './SideMenu.module.css'
import {MenuOutlined, CloseOutlined, FireOutlined, HeartOutlined, MailOutlined} from '@ant-design/icons'
import SideMenuBtn from './SideMenuBtn';

const SideMenu:FC = () => {

    const [expanded, setExpanded] = useState<boolean>(false);
    const [showText, setShowText] = useState<boolean>(false);

    useEffect(() => {
        if (expanded) setTimeout(() => setShowText(true), 300);
        else setShowText(false);
    }, [expanded])

    const expandMenuHandler = () => setExpanded(!expanded)

    return (
        <aside className={expanded ? [s.wrapper, s.active].join(' ') : s.wrapper}>

            <div className={s.sidebar}>
                <Button onClick={expandMenuHandler} type='ghost' size='large' className={s.ctrlBtn} icon={expanded ? <CloseOutlined /> : <MenuOutlined/>}/>
                <Divider style={{margin:'6px 0'}}/>

                <SideMenuBtn path='/anime' expanded={expanded} show={showText} icon={<FireOutlined />} title='Аниме'/>
                <SideMenuBtn path='' expanded={expanded} show={showText} icon={<HeartOutlined />} title='Мои списки'/>
                <SideMenuBtn path='' expanded={expanded} show={showText} icon={<MailOutlined />} title='Почта'/>
            </div>

        </aside>
    )
}

export default SideMenu