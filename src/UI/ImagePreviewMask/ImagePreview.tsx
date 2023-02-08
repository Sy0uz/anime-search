import { Space, Button } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import React, {FC, useState, useEffect, useMemo} from 'react'
import s from './ImagePreview.module.css'

interface ImagePreviewProps {
    src: string;
    expandSrc?: string;
    alt: string;
    className?: string;
}

const ImagePreview: FC<ImagePreviewProps> = ({src, expandSrc, alt, className}) => {
    
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
        if (opened)
            document.body.style.overflow = 'hidden'
        else 
            document.body.style.overflow = ''

        return ():void => {
            document.body.style.overflow = ''
        }

    }, [opened])

    const openHandler = ():void => setOpened(!opened)

    return (
        <>
            <img onClick={openHandler} className={[s.image, className].join(' ')} src={src} alt={alt}/>

            {
                opened
                    ?
                    <div className={s.wrapper} onClick={openHandler}>

                        <Space size={0} direction='vertical' align='end'>

                            <Button
                                className={s.closeBtn}
                                type='text'
                                shape='circle'
                                icon={
                                    <CloseOutlined
                                        style={{ color: 'white' }} />
                                }
                                onClick={openHandler} />

                            <img
                                onClick={e => e.stopPropagation()}
                                className={s.img}
                                src={expandSrc || src}
                                alt={alt} />

                            <span>{alt}</span>

                        </Space>

                    </div>
                    : <></> 
            }
        </>
        
    )
}

export default ImagePreview