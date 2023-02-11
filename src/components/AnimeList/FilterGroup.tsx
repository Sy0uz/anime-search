import {FC} from 'react'
import { IFilter } from '../../types/types';
import Headline from '../../UI/headline/Headline';
import s from './../../styles/FilterList.module.css'
import FilterItem, { FilterItemType } from './FilterItem';

interface FilterGroupProps {
    title: string;
    list: IFilter[];
    type: FilterItemType;
}

const FilterGroup:FC<FilterGroupProps> = ({title, list, type}) => {
    return (
        <div className={s.filterGroup}>
            <Headline title={title} marginBottom={8}/>
            <div>
                {list.map((i) => 
                    <FilterItem key={i.value} item={i} type={type}/>
                )}
            </div>            
        </div>

    )
}

export default FilterGroup