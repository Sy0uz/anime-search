import React, {FC, useEffect, useState} from 'react'
import { JikanMOE } from '../API/JikanMOE';
import AnimeTitle from '../components/AnimeTitle'
import { IAnimeFull } from '../types/types';
import {Spin} from 'antd';

const AnimeTitlePage: FC = () => {

    const id = 44511;
    const [anime, setAnime] = useState<IAnimeFull | null>(null);

    const fetchAnime = async () => {
        const response = await JikanMOE.getAnimeById(id);
        setAnime(response)
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    if (!anime)
        return <div className='container spin'>
                <Spin size='large'/>
            </div>

    return (
        <AnimeTitle anime={anime}/>
    )
}

export default AnimeTitlePage