interface Measurement {
    danger: boolean,
    tempRoom: number,
    tempWater: number,
    lightSensor: number,
    lightWorkingTime: number,
    lightOffTime: Date,
    pumpTime: number,
    pumpSleep: number,
    date: Date
    _id: string;
}

interface Experimet {
    title: string;
    description: string;
    measurements: Measurement[];
    lastUpdate: Date;
    _id: string;
}

interface Device {
    name: string;
    password: string;
    description: string;
    cycles: Experimet[];
    currentExperiment: Experimet;
    _id: string;
}

interface User {
    username: string;
    password: string;
    deviceList: Device[];
    _id: string;
}

export type {
    Measurement,
    Experimet,
    Device,
    User
}