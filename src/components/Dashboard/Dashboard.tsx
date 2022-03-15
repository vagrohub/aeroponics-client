import { useState } from 'react';
import { useSelectFromArray } from '../../hooks';
import { Device, User } from '../../interface/User';
import Details from '../Details';
import Header from '../Header';
import Main from '../Main';

import './dashboard.scss';

interface DashboardProps {
    windowWidth: number;
    user: User;
}
const Dashboard = ({ windowWidth, user }: DashboardProps) => {
    const isMobile = windowWidth <= 858;
    const deviceList = user.deviceList;
    const [selectedDevice, setDevice] = useSelectFromArray(deviceList);

    const expListSelectDevice = !selectedDevice
        ? []
        : [
            selectedDevice.currentExperiment,
            ...selectedDevice.cycles
        ];
    const [selectedExperiment, setExperiment] = useSelectFromArray(expListSelectDevice);

    const [isCollapseHidden, setIsCollapseHidden] = useState(true)
    const onToggleEvent = () => {
        document.body.classList.toggle('body--overflow');
        setIsCollapseHidden(() => !isCollapseHidden)
    };
    
    const onToggleDeviceHandler = (id: string) => {     
        setDevice(deviceList.find((device: Device) => device._id === id));
    };

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
                                                        onToggleDeviceHandler(device._id)
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
                                    expListSelectDevice.map(experiment => {
                                        return (
                                            <Details.Item key={experiment._id}>
                                                {experiment.title}
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