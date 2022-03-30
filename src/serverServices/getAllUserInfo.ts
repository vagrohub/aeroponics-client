import Device from './Device';
import Experiment from './Experiment';
import User from './User'
import { User as IUser } from '../interface/User';

const getAllUserInfo = async (): Promise<IUser> => {
    const user: any = await new User().getData();

    let userWithAllInfo: any = {};

    userWithAllInfo.username = user.username;
    userWithAllInfo.email = user.email;

    userWithAllInfo.deviceList = (await new Device().getList()).devices;

    console.log(userWithAllInfo.deviceList);
    

    for await (let device of userWithAllInfo.deviceList) {
        const {
            experimentsInCycle,
            currentExperiment
        }: any = await new Experiment().getListByDeviceName(device.name)
        
        device.cycles = experimentsInCycle;
        device.currentExperiment = currentExperiment;
    }

    return userWithAllInfo;
};

export default getAllUserInfo;