import React, {FC, ReactNode} from 'react'
import { Button, Typography } from 'antd';
import s from './SideMenu.module.css';

interface BtnProps {
    icon: ReactNode;
    title?: string;
}

const SideMenuBtn:FC<BtnProps> = ({icon, title}) => {
    return (
        <div className={s.btnWrapper}>
            <Button className={s.menuBtn} type='ghost' size='large' icon={icon}>
                <Typography.Text className={s.btnTitle}>
                    {title}
                </Typography.Text>                
            </Button>
        </div>
        
    )
}

export default SideMenuBtn