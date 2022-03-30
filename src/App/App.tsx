import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import { user } from './data';
import './app.scss';

// import AuthService from '../serverServices/Auth';
import Device from '../serverServices/Device';
// import Experiment from '../serverServices/Experiment';
// import User from '../serverServices/User';

const getWindowWidth = (): number => document.documentElement.clientWidth;

(async function () {
    const device = new Device();
    const response = await device.getList();
    
    console.log(response);
    
})();

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
                <Route path='/auth' element={<Auth isMobile={isMobile} />} />
                <Route path='/registration' element={<Registration isMobile={isMobile} />} />
            </Routes>
        </>
    );
};

export default App;
