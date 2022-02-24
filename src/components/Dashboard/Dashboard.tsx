import { useSelectFromArray } from '../../hooks';
import { User } from '../../interface/User';
import Header from '../Header';
import Main from '../Main';

import './dashboard.scss';

interface DashboardProps {
    windowWidth: number;
    user: User;
}
const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const isMobile = windowWidth <= 526;

    const deviceList = user.deviceList;
    const [selectedDevice, setDevice] = useSelectFromArray(deviceList);

    const expListSelectDevice = !selectedDevice
        ? []
        : [
            selectedDevice.currentExperiment,
            ...selectedDevice.cycles
        ];
    const [selectedExperiment, setExperiment] = useSelectFromArray(expListSelectDevice);

    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <Header
                    windowWidth={windowWidth}
                    deviceList={deviceList}
                    setDevice={setDevice}
                    experimentList={expListSelectDevice}
                    setExperiment={setExperiment}
                />
            </div>
            <div className='dashboard__main'>
                <Main
                    isMobile={isMobile}
                    user={user}
                    selectedExperiment={selectedExperiment}
                    selectedDevice={selectedDevice}
                >
                    <Main.Greetings />
                    <Main.Description />
                    <Main.PerformanceIndicators />
                </Main>
            </div>
        </div>
    );
};

export default Dashboard;