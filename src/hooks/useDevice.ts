import { useState } from 'react';
import ResponseError from '../serverServices/basic/ResponseError';
import DeviceService, { MainInfoDevice } from '../serverServices/Device';

const useDevice = async () => {
    const deviceService = new DeviceService();
    const response = await deviceService.getList();

    const deviceList: MainInfoDevice[] = response instanceof ResponseError
        ? []
        : response;

    const [selectDevice, setDevice] = useState(deviceList[0] || null);

    return {
        deviceList,
        selectDevice,
        setDevice
    }
};

export default useDevice;