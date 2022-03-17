import { useState } from 'react';
import { Device, Experimet, User } from '../../interface/User';
import Details from '../Details';
import Header from '../Header';
import Main from '../Main';
import ActiveElement from '../ActiveElement';
import Modal from '../Modal';
import Input from '../Input';
import { useUserData } from './hooks';
import './dashboard.scss';
import SimpleButton from '../SimpleButton';

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

    const toggleShowModal = (id: string) => () => {
        setIdShowModal(() => id);
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
                        <Details isMobile={isMobile}>
                            <Details.Summary>Настройки</Details.Summary>

                            <Details.Body>
                                <Details.Group>
                                    <Details.Item>
                                        <ActiveElement
                                            isMobile={isMobile}
                                            onClickHandler={
                                                toggleShowModal('newDevice')
                                            }
                                        >
                                            Новое устройства
                                        </ActiveElement>
                                    </Details.Item>
                                    <Details.Item>
                                        <ActiveElement
                                            isMobile={isMobile}
                                            onClickHandler={
                                                toggleShowModal('newExperiment')
                                            }
                                        >
                                            Новый эксперимент
                                        </ActiveElement>
                                    </Details.Item>
                                </Details.Group>

                                <Details.Group>
                                    <Details.Item>
                                        <ActiveElement
                                            isMobile={isMobile}
                                            onClickHandler={
                                                toggleShowModal('currentDevice')
                                            }
                                        >
                                            Текущее устройство
                                        </ActiveElement>
                                    </Details.Item>
                                    <Details.Item>
                                        <ActiveElement
                                            isMobile={isMobile}
                                            onClickHandler={
                                                toggleShowModal('currentExperiment')
                                            }
                                        >
                                            Текущий эксперимент
                                        </ActiveElement>
                                    </Details.Item>
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