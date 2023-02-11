import { Input } from 'antd';
import {ChangeEvent, FC, useEffect, useState} from 'react'
import { JikanMOE } from '../API/JikanMOE';
import AnimeList from '../components/AnimeList/AnimeList';
import FilterList from '../components/AnimeList/FilterList';
import { IAnime, IAnimeListParams } from '../types/types'
import Loader from '../UI/Loader/Loader';
import Wrapper from '../UI/Wrapper/Wrapper';
import s from './../styles/AnimeListPage.module.css'

const AnimeListPage: FC = () => {

    const [animeList, setAnimeList] = useState<IAnime[]>([]);

    const [params, setParams] = useState<IAnimeListParams>({
        q: '',
        status: '',
        rating: '',
        order_by: 'score',
        sort: 'desc',
        type: ''
    });

    const fetchAnimeList = async ():Promise<void> => {
        const response = await JikanMOE.getAnimeList(params);
        setAnimeList(response);
    }

    useEffect(() => {
        fetchAnimeList();
    }, [])

    if (!animeList.length)
        return (
            <section className={s.section}>
                <Loader/>
                <FilterList />
            </section>
        )

    return (
        <section className={s.section}>
            <Wrapper className={s.wrapper}>
                <AnimeList animeList={animeList}/>
            </Wrapper>
            <FilterList/>         
        </section>
    )
}

export default AnimeListPage