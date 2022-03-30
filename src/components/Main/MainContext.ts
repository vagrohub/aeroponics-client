import { createContext } from 'react';
import { Device, Experiment, User } from '../../interface/User';

interface Context {
    isMobile: boolean,
    user: User | null,
    selectedExperiment: Experiment | undefined,
    selectedDevice: Device | undefined
};
const MainContext = createContext<Context>({
    isMobile: false,
    user: null,
    selectedExperiment: undefined,
    selectedDevice: undefined
});

export default MainContext;