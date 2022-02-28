import { User } from "../../interface/User";

const user: User = {
    username: 'Admin',
    password: 'toor',
    deviceList: [
        {
            name: 'тестовое устройство',
            password: '123',
            cycles: [],
            description: 'описание тестового утройства',
            currentExperiment: {
                title: 'Выращиваем горох',
                description: 'Тестируем выращвание гороха',
                lastUpdate: new Date(2022, 1, 24, 16, 40),
                measurements: [
                    {
                        danger: false,
                        tempRoom: 25.5,
                        tempWater: 20,
                        lightSensor: 2,
                        lightWorkingTime: 100,
                        lightOffTime: new Date(2022, 1, 24, 16),
                        pumpTime: 10,
                        pumpSleep: 20,
                        date: new Date(2022, 1, 24, 16),
                    }
                ]
            }
        }
    ]
};

export {
    user
}