import Details from "../Details";
import GroupList from "../GroupList";

interface SettingsProps {
    isMobile: boolean;
}
const Settings = ({
    isMobile
}: SettingsProps) => {
    return (
        <Details
            summary='Настройки'
            isMobile={isMobile}
            render={() => {
                return (
                    <GroupList list={[
                        [<p>Новое устройство</p>, <p>Новый эксперимент</p>],
                        [<p>Текущее устройство</p>, <p>Текущий эксперимент</p>],
                        [<p>Остановить эксперимент</p>]
                    ]} />
                );
            }}
        />
    );
};

export default Settings;