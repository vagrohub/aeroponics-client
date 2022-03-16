import { useState } from 'react';
import { Device, Experimet, User } from '../../interface/User';
import Details from '../Details';
import Header from '../Header';
import Main from '../Main';
import { useUserData } from './hooks';

import './dashboard.scss';

interface DashboardProps {
    windowWidth: number;
    user: User;
}
const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const isMobile = windowWidth <= 858;
    const {
        experimentList,
        setExperiment,
        selectExperiment,
        deviceList,
        setDevice,
        selectDevice
    } = useUserData(user);

    const [isCollapseHidden, setIsCollapseHidden] = useState(true)
    const onToggleEvent = () => {
        document.body.classList.toggle('body--overflow');
        setIsCollapseHidden(() => !isCollapseHidden)
    };

    const onSelectDeviceHandler = (id: string) => {
        setDevice(deviceList.find(
            (device: Device) => device._id === id)
        );
    };

    const onSelectExperimentHandler = (id: string) => {
        setExperiment(experimentList.find(
            (experiment: Experimet) => experiment._id === id)
        );
    }

    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <Header
                    isMobile={isMobile}
                >
                    <Header.Brand />

                    <Header.Toggle callback={onToggleEvent} />

                    <Header.Collapse isHidden={isCollapseHidden && isMobile}>
                        <Details isMobile={isMobile}>
                            <Details.Summary>Настройки</Details.Summary>

                            <Details.Body>
                                <Details.Group>
                                    <Details.Item>Новое устройство</Details.Item>
                                    <Details.Item>Новый эксперимент</Details.Item>
                                </Details.Group>

                                <Details.Group>
                                    <Details.Item>Текущее устройство</Details.Item>
                                    <Details.Item>Текущий эксперимент</Details.Item>
                                </Details.Group>

                                <Details.Group>
                                    <Details.Item>Остановить эксперимент</Details.Item>
                                </Details.Group>
                            </Details.Body>
                        </Details>

                        <Details isMobile={isMobile}>
                            <Details.Summary>устройства</Details.Summary>

                            <Details.Body>
                                {
                                    deviceList.map(device => {
                                        return (
                                            <Details.Item key={device._id}>
                                                <span onClick={
                                                    () => {
                                                        onSelectDeviceHandler(device._id)
                                                    }
                                                }>
                                                    {device.name}
                                                </span>
                                            </Details.Item>
                                        );
                                    })
                                }
                            </Details.Body>
                        </Details>

                        <Details isMobile={isMobile}>
                            <Details.Summary>эксперименты</Details.Summary>

                            <Details.Body>
                                {
                                    experimentList.map(experiment => {
                                        return (
                                            <Details.Item key={experiment._id}>
                                                <span onClick={
                                                    () => {
                                                        onSelectExperimentHandler(experiment._id)
                                                    }
                                                }>
                                                    {experiment.title}
                                                </span>
                                            </Details.Item>
                                        );
                                    })
                                }
                            </Details.Body>
                        </Details>

                    </Header.Collapse>
                </Header>
            </div>
            <div className='dashboard__main'>
                <Main
                    isMobile={isMobile}
                    user={user}
                    selectedExperiment={selectExperiment}
                    selectedDevice={selectDevice}
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