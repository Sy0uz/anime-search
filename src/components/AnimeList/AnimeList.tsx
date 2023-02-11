import {FC} from 'react'
import { IAnime } from '../../types/types'
import s from './../../styles/AnimeList.module.css'
import AnimeItem from '../AnimeItem';

interface AnimeListProps {
    animeList: IAnime[];
}

const AnimeList:FC<AnimeListProps> = ({animeList}) => {
    return (
        <div className={s.wrapper}>
            {animeList.map((anime) => <AnimeItem key={anime.mal_id} anime={anime} />)}
        </div>
    )
}

export default AnimeList