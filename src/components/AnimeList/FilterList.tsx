import { FC } from 'react'
import s from './../../styles/FilterList.module.css'
import { FilterItemType } from './FilterItem';
import FilterGroup from './FilterGroup';
import { IAnimeListParams, IFilter } from '../../types/types';

interface FilterListProps {
}

const FilterList: FC<FilterListProps> = () => {

    const status: IFilter[] = [
        {title:'Airing', value:'airing'},
        {title:'Complete', value:'complete'},
        {title:'Upcoming', value:'upcoming'},
    ];
    const rating: IFilter[] = [
        {title:'G - All Ages', value:'g'},
        {title:'PG - Children', value:'pg'},
        {title:'PG-13 - Teens 13 or older', value:'pg13'},
        {title:'R - 17+ (Violence & Profanity)', value:'r17'},
        {title:'R+ - Mild Nudity', value:'r'},
        {title:'Hentai', value:'rx'},
    ];
    const type: IFilter[] = [
        {title:'TV Serial', value:'tv'},
        {title:'Movie', value:'movie'},
        {title:'OVA', value:'ova'},
        {title:'Special', value:'special'},
        {title:'ONA', value:'ona'},
        {title:'Music', value:'music'},
    ];

    const sortBy: IFilter[] = [
        {title: 'Ascending Order', value:'desc'},
        {title: 'Descending Order', value:'asc'}
    ]

    return (
        <div className={s.wrapper}>

            <FilterGroup title='Status' list={status} type={FilterItemType.Checkbox}/>

            <FilterGroup title='Rating' list={rating} type={FilterItemType.Checkbox}/>

            <FilterGroup title='Type' list={type} type={FilterItemType.Checkbox}/>

            <FilterGroup title='Sort order' list={sortBy} type={FilterItemType.Radio}/>
            
        </div>
    )
}

export default FilterList;