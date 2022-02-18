import { User } from '../General/interfaces';

const user: User = {
    username: 'Admin',
    password: 'toor',
    deviceList: [{
        name: 'test device',
        password: '1234',
        description: 'Какое-то крутое устройство',
        cycles: [{
            title: 'какой-то старый эксперимент',
            description: 'супер полезное описание старого эксперимента',
            measurements: [],
            lastUpdate: new Date(2022, 1, 14, 15)
        }],
        currentExperiment: {
            title: 'какой-то текущий эксперимент',
            description: 'супер полезное описание текущего эксперимента',
            measurements: [
                {
                    danger: false,
                    tempRoom: 30,
                    tempWater: 21.4,
                    lightSensor: 13,
                    lightWorkingTime: 123,
                    lightOffTime: new Date(2022, 1, 14, 15),
                    pumpTime: 23,
                    pumpSleep: 12,
                    date: new Date(2022, 1, 14, 15),
                },
                {
                    danger: false,
                    tempRoom: 23.5,
                    tempWater: 41.4,
                    lightSensor: 13,
                    lightWorkingTime: 123,
                    lightOffTime: new Date(2022, 1, 14, 15),
                    pumpTime: 23,
                    pumpSleep: 12,
                    date: new Date(2022, 1, 14, 16),
                },
                {
                    danger: false,
                    tempRoom: 13.5,
                    tempWater: 21.4,
                    lightSensor: 13,
                    lightWorkingTime: 123,
                    lightOffTime: new Date(2022, 1, 14, 17),
                    pumpTime: 23,
                    pumpSleep: 12,
                    date: new Date(2022, 1, 14, 18),
                },
                {
                    danger: false,
                    tempRoom: 23.5,
                    tempWater: 11.4,
                    lightSensor: 13,
                    lightWorkingTime: 123,
                    lightOffTime: new Date(2022, 1, 14, 15),
                    pumpTime: 23,
                    pumpSleep: 12,
                    date: new Date(2022, 1, 14, 15),
                },
            ],
            lastUpdate: new Date(2022, 1, 16)
        }
    }]
};

export {
    user
}