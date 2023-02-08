import React, {FC, useState} from 'react'
import { IAnime } from '../types/types';
import {Divider, Typography} from 'antd'
import s from './../styles/AnimeTitle.module.css'
import ImagePreview from '../UI/ImagePreviewMask/ImagePreview';
import { synopsisClear } from '../utlis/synopsisClear';

interface AnimeTitleProps {
    anime: IAnime;
}

const AnimeTitle: FC<AnimeTitleProps> = ({anime}) => {

    const {Title, Paragraph, Text} = Typography;
    
    return (
        <article className={s.wrapper}>
            <div className={s.promo}>
                <div className={s.titleImgBox}>
                    <ImagePreview src={anime.images.jpg.image_url} expandSrc={anime.images.jpg.large_image_url} alt={anime.title_english} className={s.titleImg} />
                </div>
                <div className={s.info}>
                    <Title className={s.title}>{anime.title_english}</Title>
                </div>
                
            </div>
            

            

            <Paragraph>
                <Divider orientation='left'>Описание</Divider>
                <Text>
                    {synopsisClear(anime.synopsis)}
                </Text>
            </Paragraph>
        </article>
    )
}

export default AnimeTitle