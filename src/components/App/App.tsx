import { useState, useEffect } from 'react';
import Dashboard, { User } from '../Dashboard';
import './app.scss';

const user: User = {
    username: 'Admin',
    password: 'toor',
    deviceList: [{
        name: 'test device',
        password: '1234',
        description: 'Какое-то крутое устройство',
        cycles: [{
            title: 'какой-то старый эксперимент',
            description: 'супер полезное описание старого эксперимента',
            measurements: [],
            lastUpdate: new Date(2022, 1, 14, 15)
        }],
        currentExperiment: {
            title: 'какой-то текущий эксперимент',
            description: 'супер полезное описание текущего эксперимента',
            measurements: [],
            lastUpdate: new Date(2022, 1, 14, 15)
        }
    }]
};

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
