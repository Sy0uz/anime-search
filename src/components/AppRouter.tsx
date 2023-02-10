import React, {FC} from 'react'
import {Routes, Route} from 'react-router-dom'
import AnimeTitlePage from '../pages/AnimePage'

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path='/anime/:id' element={<AnimeTitlePage/>}/>
        </Routes>
    )
}

export default AppRouter