import { useEffect, useState } from 'react';
import { Device, Experiment, User } from '../../interface/User';

const ejectLastDeviceFromUser = (user: User): Device | undefined => {
    return user.deviceList.at(-1);
};

const ejectLastExperimentFromDevice = (device: Device): Experiment | undefined => {
    return device.currentExperiment;
};

const ejectDeviceListFromUser = (user: User): Device[] => {
    return user.deviceList;
};

const ejectExperimentListFromDevice = (device: Device): Experiment[] => {
    return [device.currentExperiment, ...device.cycles]
};

const useUserData = (user: User) => {
    const device = ejectLastDeviceFromUser(user);
    const deviceList = ejectDeviceListFromUser(user);
    const [selectDevice, setDevice] = useState(device);

    const experiment = selectDevice
        ? ejectLastExperimentFromDevice(selectDevice)
        : undefined;
    const experimentList = selectDevice
        ? ejectExperimentListFromDevice(selectDevice)
        : [];
    const [selectExperiment, setExperiment] = useState(experiment);
    

    useEffect(() => {
        setExperiment(experiment)
    }, [experiment]);
    

    return {
        deviceList,
        selectDevice,
        setDevice,
        experimentList,
        selectExperiment,
        setExperiment
    };
};

export {
    useUserData
}