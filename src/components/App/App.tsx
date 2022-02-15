import { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import { user } from './data';
import './app.scss';

const getWindowWidth = (): number => document.documentElement.clientWidth;

const App = () => {
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());

    const onResizeEvent = () => setWindowWidth(getWindowWidth());
    useEffect(() => {
        window.addEventListener('resize', onResizeEvent);

        return () => window.removeEventListener('resize', onResizeEvent);
    }, []);

    return (
        <Dashboard windowWidth={windowWidth} user={user} />
    );
};

export default App;
