import {FC} from 'react'
import { Checkbox, Radio } from 'antd';
import s from './../../styles/FilterList.module.css'
import { IFilter } from '../../types/types';

export enum FilterItemType {
    Radio = 'Radio',
    Checkbox = 'Checkbox',
}

interface FilterItemProps {
    item: IFilter;
    type: FilterItemType;
}

const FilterItem:FC<FilterItemProps> = ({item, type}) => {
    return (
        type === FilterItemType.Radio
        ?
        <Radio.Group className={s.item}>
            <Radio value={item.value}>{item.title}</Radio>
        </Radio.Group>
        :
        <Checkbox.Group className={s.item}>
            <Checkbox value={item.value}>{item.title}</Checkbox>
        </Checkbox.Group>
    )
}

export default FilterItem