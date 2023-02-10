import React, { useEffect, useState } from 'react'
import { JikanMOE } from './API/JikanMOE';
import AppRouter from './components/AppRouter';
import AnimeTitlePage from './pages/AnimePage';
import { IAnime } from './types/types';
import Footer from './UI/Footer/Footer';
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
                    <div className='content'>
                        <AppRouter/>
                        <Footer/>
                    </div>
            </main>
        </div>
    )
}

export default App