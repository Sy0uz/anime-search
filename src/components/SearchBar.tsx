import React, {FC} from 'react'
import {Space, Input, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import s from './../styles/SearchBar.module.css'

const SearchBar:FC = () => {
    return (
        <Space.Compact block>
            <Input
                placeholder='Аниме, манга, персонажи.'
                allowClear
                className={s.searchInput}
            />
            <Button icon={<SearchOutlined />} />
        </Space.Compact>
    )
}

export default SearchBar