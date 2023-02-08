import React, { useEffect, useState } from 'react'
import { JikanMOE } from './API/JikanMOE';
import AnimeTitlePage from './pages/AnimeTitlePage';
import { IAnime } from './types/types';
import Navbar from './UI/Navbar/Navbar';
import SideMenu from './UI/SideMenu/SideMenu';

const App = () => {

    const [anime, setAnime] = useState<IAnime[]>([]);

    const fetchAnime = async () => {
        const response = await JikanMOE.getAnimeListByName('Chainsaw');
        setAnime(response);
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    return (
        <div className='App'>
            <Navbar/>
            <main className='main'>
                <SideMenu/>
                <AnimeTitlePage/>                  
            </main>
        </div>
    )
}

export default App