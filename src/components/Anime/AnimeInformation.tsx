import { Descriptions } from 'antd';
import React, {FC} from 'react'
import { IAnimeFull } from '../../types/types'
import Headline from '../../UI/headline/Headline';
import { getDateFromString } from '../../utlis/getDateFromString';
import { getObjectNames } from '../../utlis/getObjectNames';
import s from './../../styles/AnimeInformation.module.css'

interface AnimeInformationProps {
    anime: IAnimeFull;
}

interface IItem {
    label: string;
    child: number | string;
}

const AnimeInformation:FC<AnimeInformationProps> = ({anime}) => {

    const {Item} = Descriptions;

    const DescItem: IItem[] = [
        {label: 'Type', child: anime.type},
        {label: 'Episodes', child: anime.episodes},
        {label: 'Status', child: anime.status},
        {label: 'Rating', child: anime.rating},
        {label: 'Aired', child: `${getDateFromString(anime.aired.from)} to ${getDateFromString(anime.aired.to)}`},
        {label: 'Duration', child: anime.duration},
        {label: 'Genres', child: getObjectNames(anime.genres)},
        {label: 'Studios', child: getObjectNames(anime.studios)},
        {label: 'Producers', child: getObjectNames(anime.producers)}
    ]

    return (
        <Descriptions title={<Headline title='Information' maxWidth={400}/>} labelStyle={{opacity:0.88}} column={1} size='small' className={s.wrapper}>
            {DescItem.map((item) => <Item key={item.label} label={item.label}>{item.child}</Item>)}
        </Descriptions>
    )
}

export default AnimeInformation