import { createContext } from 'react';
import { Device, Experimet, User } from '../../interface/User';

interface Context {
    isMobile: boolean,
    user: User | null,
    selectedExperiment: Experimet | null,
    selectedDevice: Device | null
};
const MainContext = createContext<Context>({
    isMobile: false,
    user: null,
    selectedExperiment: null,
    selectedDevice: null
});

export default MainContext;