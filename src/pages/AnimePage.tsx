import React, {FC, useEffect, useState} from 'react'
import { JikanMOE } from '../API/JikanMOE';
import Anime from '../components/Anime/Anime'
import { IAnimeFull } from '../types/types';
import {useParams} from 'react-router-dom';
import Loader from '../UI/Loader/Loader';
import Wrapper from '../UI/Wrapper/Wrapper';

type AnimeTitlePageParams = {
    id: string;
}

const AnimeTitlePage: FC = () => {

    const params = useParams<AnimeTitlePageParams>();
    const [anime, setAnime] = useState<IAnimeFull | null>(null);

    const fetchAnime = async () => {
        const response = await JikanMOE.getAnimeById(params.id);
        setAnime(response)
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    if (!anime)
        return <Loader/>

    return (
        <Wrapper>
            <Anime anime={anime}/>
        </Wrapper>
    )
}

export default AnimeTitlePage