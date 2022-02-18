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
}

interface Experimet {
    title: string;
    description: string;
    measurements: Measurement[];
    lastUpdate: Date;
}

interface Device {
    name: string;
    password: string;
    description: string;
    cycles: Experimet[];
    currentExperiment: Experimet;
}

interface User {
    username: string;
    password: string;
    deviceList: Device[];
}

export type {
    Measurement,
    Experimet,
    Device,
    User
}