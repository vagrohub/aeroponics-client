import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import { user } from './data';
import './app.scss';

const getWindowWidth = (): number => document.documentElement.clientWidth;

const App = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
    const isMobile = windowWidth <= 858;

    const onResizeEvent = () => setWindowWidth(getWindowWidth());
    useEffect(() => {
        window.addEventListener('resize', onResizeEvent);

        return () => window.removeEventListener('resize', onResizeEvent);
    }, []);

    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Dashboard isMobile={isMobile} user={user} />}
                />
                <Route path='/auth' element={<Auth isMobile={false} />} />
                <Route path='/registration' element={<Registration isMobile={false} />} />
            </Routes>
        </>
    );
};

export default App;
