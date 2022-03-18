import { useState } from 'react';
import { Device, Experimet, User } from '../../interface/User';
import Details from '../../components/Details';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ActiveElement from '../../components/ActiveElement';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import { useUserData } from './hooks';
import './dashboard.scss';
import SimpleButton from '../../components/SimpleButton';

interface DashboardProps {
    isMobile: boolean;
    user: User;
}
const Dashboard = ({ isMobile, user }: DashboardProps) => {
    const {
        experimentList,
        setExperiment,
        selectExperiment,
        deviceList,
        setDevice,
        selectDevice
    } = useUserData(user);

    // utils
    const pinBody = () => document.body.classList.add('body--overflow');
    const unPinBody = () => document.body.classList.remove('body--overflow');
    const togglePinBody = () => document.body.classList.toggle('body--overflow');


    // mobile menu settings
    const [isCollapseHidden, setIsCollapseHidden] = useState(true)
    const onToggleEvent = () => {
        togglePinBody()
        setIsCollapseHidden(() => !isCollapseHidden)
    };


    // toggle device and experiment
    const onSelectDeviceHandler = (id: string) => {
        setDevice(deviceList.find(
            (device: Device) => device._id === id)
        );
    };

    const onSelectExperimentHandler = (id: string) => {
        setExperiment(experimentList.find(
            (experiment: Experimet) => experiment._id === id)
        );
    };

    // modal settings
    const [idShowModal, setIdShowModal] = useState<string>();

    const hashIsShowModal = {
        newDevice: idShowModal === 'newDevice',
        newExperiment: idShowModal === 'newExperiment',
        currentDevice: idShowModal === 'currentDevice',
        currentExperiment: idShowModal === 'currentExperiment'
    };

    const toggleShowModal = (id: string) => {
        setIdShowModal(id);
        pinBody();
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
                        <Navbar isMobile={isMobile}>
                            <Navbar.Settings
                                toggleShowModal={toggleShowModal}
                            />
                            <Navbar.Devices
                                deviceList={deviceList}
                                onSelectDeviceHandler={onSelectDeviceHandler}
                            />
                            <Navbar.Experimets
                                experimentList={experimentList}
                                onSelectExperimentHandler={onSelectExperimentHandler}
                            />
                        </Navbar>
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

            <Modal
                isMobile={isMobile}
                isShow={hashIsShowModal.newDevice}
                onClosedClickHandler={unPinBody}
            >
                <Input isMobile={isMobile}>
                    <Input.Label>Название</Input.Label>

                    <Input.Text>Введите название нового устройства</Input.Text>
                </Input>

                <Input isMobile={isMobile}>
                    <Input.Label>Описание</Input.Label>

                    <Input.Textarea>Описание нового устройства</Input.Textarea>
                </Input>

                <SimpleButton
                    isMobile={isMobile}
                    isFill={isMobile}
                    isDisabled={false}
                    text='сохранить'
                    value='сохранить'
                    onClick={() => console.log('work')}
                />
            </Modal>

            <Modal
                isMobile={isMobile}
                isShow={hashIsShowModal.newExperiment}
                onClosedClickHandler={unPinBody}
            >
                <Input isMobile={isMobile}>
                    <Input.Label>Название</Input.Label>

                    <Input.Text>Введите название нового эксперимента</Input.Text>
                </Input>

                <Input isMobile={isMobile}>
                    <Input.Label>Описание</Input.Label>

                    <Input.Textarea>Описание нового эксперимента</Input.Textarea>
                </Input>

                <SimpleButton
                    isMobile={isMobile}
                    isFill={isMobile}
                    isDisabled={false}
                    text='сохранить'
                    value='сохранить'
                    onClick={() => console.log('work')}
                />
            </Modal>

            <Modal
                isMobile={isMobile}
                isShow={hashIsShowModal.currentDevice}
                onClosedClickHandler={unPinBody}
            >
                <Input isMobile={isMobile}>
                    <Input.Label>Название</Input.Label>

                    <Input.Text>{selectDevice?.name || ''}</Input.Text>
                </Input>

                <Input isMobile={isMobile}>
                    <Input.Label>Описание</Input.Label>

                    <Input.Textarea>{selectDevice?.description || ''}</Input.Textarea>
                </Input>

                <SimpleButton
                    isMobile={isMobile}
                    isFill={isMobile}
                    isDisabled={false}
                    text='сохранить'
                    value='сохранить'
                    onClick={() => console.log('work')}
                />
            </Modal>

            <Modal
                isMobile={isMobile}
                isShow={hashIsShowModal.currentExperiment}
                onClosedClickHandler={unPinBody}
            >
                <Input isMobile={isMobile}>
                    <Input.Label>Название</Input.Label>

                    <Input.Text>{selectExperiment?.title || ''}</Input.Text>
                </Input>

                <Input isMobile={isMobile}>
                    <Input.Label>Описание</Input.Label>

                    <Input.Textarea>{selectExperiment?.description || ''}</Input.Textarea>
                </Input>

                <SimpleButton
                    isMobile={isMobile}
                    isFill={isMobile}
                    isDisabled={false}
                    text='сохранить'
                    value='сохранить'
                    onClick={() => console.log('work')}
                />
            </Modal>
        </div>
    );
};

export default Dashboard;