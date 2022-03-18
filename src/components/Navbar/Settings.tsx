import ActiveElement from '../ActiveElement';
import Details from '../Details';
import { useNavbarContext } from './hooks';

interface SettingsProps {
    toggleShowModal(id: 'newDevice' | 'newExperiment' | 'currentDevice' | 'currentExperiment'): void
}
const Settings = ({ toggleShowModal }: SettingsProps) => {
    const { isMobile } = useNavbarContext();

    return (
        <Details isMobile={isMobile}>
            <Details.Summary>Настройки</Details.Summary>

            <Details.Body>
                <Details.Group>
                    <Details.Item>
                        <ActiveElement
                            isMobile={isMobile}
                            onClickHandler={
                                () => toggleShowModal('newDevice')
                            }
                        >
                            Новое устройства
                        </ActiveElement>
                    </Details.Item>
                    <Details.Item>
                        <ActiveElement
                            isMobile={isMobile}
                            onClickHandler={
                                () => toggleShowModal('newExperiment')
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
                                () => toggleShowModal('currentDevice')
                            }
                        >
                            Текущее устройство
                        </ActiveElement>
                    </Details.Item>
                    <Details.Item>
                        <ActiveElement
                            isMobile={isMobile}
                            onClickHandler={
                                () => toggleShowModal('currentExperiment')
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
    );
};

export default Settings;