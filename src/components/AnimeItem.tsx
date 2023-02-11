import {FC, useState} from 'react'
import { Link } from 'react-router-dom';
import { IAnime } from '../types/types'
import Headline from '../UI/headline/Headline';
import { cutString } from '../utlis/cutString';
import s from './../styles/AnimeItem.module.css'
import { SearchOutlined } from '@ant-design/icons';

export enum size {
    big = 'big',
    middle = 'middle',
    small = 'small',
}

interface AnimeItemProps {
    anime: IAnime;
}

const AnimeItem:FC<AnimeItemProps> = ({anime}) => {

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Link onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} to={`/anime/${anime.mal_id}`} className={s.wrapper}>
            <div className={s.imgBox}>
                <img className={s.image} src={anime.images.webp.image_url} alt="" />
                <div className={hovered ? [s.mask, s.active].join(' ') : s.mask}><SearchOutlined style={{color:'white'}}/></div>

            </div>
            
            <Headline title={cutString(anime.title_english || anime.title, 16)} fontSize={14}/>
            <div className={s.info}><span>{anime.type}</span> <span>{anime.year}</span></div>
        </Link>
    )
}

export default AnimeItem