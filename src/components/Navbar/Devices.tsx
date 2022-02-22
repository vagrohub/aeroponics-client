import { Device } from '../../interface/User';
import Details from '../Details';
import GroupList from '../GroupList';

interface DevicesProps {
    deviceList: Device[];
    setDevice(experiment: Device): any;
    isMobile: boolean;
}
const Devices = ({
    deviceList,
    setDevice,
    isMobile
}: DevicesProps) => {
    return (
        <Details
            summary='Устройства'
            isMobile={isMobile}
            render={() => {
                return (
                    <GroupList list={[
                        deviceList.map(device => {
                            return (
                                <p
                                    className='navbar__select'
                                    onClick={() => setDevice(device)}
                                >
                                    {device.name}
                                </p>
                            );
                        })
                    ]} />
                );
            }}
        />
    );
};

export default Devices;