import { FC } from 'react'
import AppRouter from './components/AppRouter';
import Footer from './UI/Footer/Footer';
import Navbar from './UI/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';

const App:FC = () => {

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