import React, {FC} from 'react'
import { IAnime } from '../types/types';
import {Typography, Image} from 'antd'
import {ExpandAltOutlined} from '@ant-design/icons'
import s from './../styles/AnimeTitle.module.css'

interface AnimeTitleProps {
    anime: IAnime;
}

const AnimeTitle: FC<AnimeTitleProps> = ({anime}) => {
    
    return (
        <div>
            <Typography.Title>{anime.title_english}</Typography.Title>
            <Image 
                width={225}
                src={anime.images.jpg.image_url}
                placeholder='Превью'
                preview={{
                    src: anime.images.jpg.large_image_url,
                    mask: <div className={s.preview}>
                        <ExpandAltOutlined />
                    </div>
                }}
            />
        </div>
    )
}

export default AnimeTitle