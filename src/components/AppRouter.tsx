import React, {FC} from 'react'
import {Routes, Route} from 'react-router-dom'
import AnimeListPage from '../pages/AnimeListPage'
import AnimeTitlePage from '../pages/AnimePage'

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Главная</div>}/>
            <Route path='/anime' element={<AnimeListPage/>}/>
            <Route path='/anime/:id' element={<AnimeTitlePage/>}/>
        </Routes>
    )
}

export default AppRouter