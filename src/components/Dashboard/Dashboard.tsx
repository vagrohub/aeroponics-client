import { useState } from 'react';
import { Device, Experimet, User } from '../../interface/User';
import Header from '../Header';
import Main, { MainSection } from '../Main';
import { detailsList } from './configuration/header';
import './dashboard.scss';

interface DashboardProps {
    windowWidth: number;
    user: User;
}
const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const isMobile = windowWidth <= 526;
    const deviceList = user.deviceList;

    let experimentList: Experimet[] = [];
    let mainChildren: JSX.Element;

    const initialDevice = deviceList[0] || null;
    const [selectedDevice, setDevice] = useState<Device|null>(initialDevice);
    const [selectedExperiment, setExperiment] = useState<Experimet|null>(selectedDevice.currentExperiment || null);

    if (!selectedDevice) {
        mainChildren = (
            <MainSection.Greetings
                username={user.username}
                isMobile={isMobile}
            />
        )
    } else if (selectedExperiment.measurements.length === 0) {
        experimentList = [
            ...selectedDevice.cycles,
            selectedDevice.currentExperiment
        ]

        mainChildren = (
            <>
                <MainSection.Description
                    selectedDevice={selectedDevice}
                    selectedExperiment={selectedExperiment}
                    isMobile={isMobile}
                />
                <section>
                    Измеренений у эксперимента "{selectedExperiment.title}"
                    пока нет
                </section>
            </>
        );
    } else {
        experimentList = [
            ...selectedDevice.cycles,
            selectedDevice.currentExperiment
        ]

        mainChildren = (
            <>
                <MainSection.Description
                    selectedDevice={selectedDevice}
                    selectedExperiment={selectedExperiment}
                    isMobile={isMobile}
                />
                <MainSection.Measurement
                    selectedExperiment={selectedExperiment}
                    isMobile={isMobile}
                />
            </>
        );
    }



    return (
        <div className='dashboard'>
            <Header
                detailsList={detailsList}
                windowWidth={windowWidth}
                deviceList={deviceList}
                selectedDevice={selectedDevice}
                setDevice={setDevice}
                experimentList={experimentList}
                selectedExperiment={selectedExperiment}
                setExperiment={setExperiment}
            />

            <div className='dashboard__main'>
                <Main>
                    {mainChildren}
                </Main>
            </div>
        </div>
    );
};

export default Dashboard;

/*
<MainSection.Measurement
    selectedExperiment={selectedExperiment}
    isMobile={isMobile}
/>
*/