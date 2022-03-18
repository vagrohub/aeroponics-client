import { useState } from 'react';
import { Device, Experimet, User } from '../../interface/User';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ModalForForm from '../../components/ModalForForm';
import Navbar from '../../components/Navbar';
import { useUserData } from './hooks';
import './dashboard.scss';

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

            <ModalForForm
                isMobile={isMobile}
                isShow={hashIsShowModal.newDevice}
                onClosedClickHandler={unPinBody}
            >
                <ModalForForm.FieldInput label='Название' type='Text'>
                    Введите название нового устройства
                </ModalForForm.FieldInput>

                <ModalForForm.FieldInput label='Описание' type='Textarea'>
                    Описание нового устройства
                </ModalForForm.FieldInput>

                <ModalForForm.SendForm>Сохранить</ModalForForm.SendForm>
            </ModalForForm>

            <ModalForForm
                isMobile={isMobile}
                isShow={hashIsShowModal.newExperiment}
                onClosedClickHandler={unPinBody}
            >
                <ModalForForm.FieldInput label='Название' type='Text'>
                    Введите название нового эксперимента
                </ModalForForm.FieldInput>

                <ModalForForm.FieldInput label='Описание' type='Textarea'>
                    Описание нового эксперимента
                </ModalForForm.FieldInput>

                <ModalForForm.SendForm>Сохранить</ModalForForm.SendForm>
            </ModalForForm>

            <ModalForForm
                isMobile={isMobile}
                isShow={hashIsShowModal.currentDevice}
                onClosedClickHandler={unPinBody}
            >
                <ModalForForm.FieldInput label='Название' type='Text'>
                    {selectDevice?.name || ''}
                </ModalForForm.FieldInput>

                <ModalForForm.FieldInput label='Описание' type='Textarea'>
                    {selectDevice?.description || ''}
                </ModalForForm.FieldInput>

                <ModalForForm.SendForm>Сохранить</ModalForForm.SendForm>
            </ModalForForm>

            <ModalForForm
                isMobile={isMobile}
                isShow={hashIsShowModal.currentExperiment}
                onClosedClickHandler={unPinBody}
            >
                <ModalForForm.FieldInput label='Название' type='Text'>
                    {selectExperiment?.title || ''}
                </ModalForForm.FieldInput>

                <ModalForForm.FieldInput label='Описание' type='Textarea'>
                    {selectExperiment?.description || ''}
                </ModalForForm.FieldInput>

                <ModalForForm.SendForm>Сохранить</ModalForForm.SendForm>
            </ModalForForm>
        </div>
    );
};

export default Dashboard;