interface Experimet {
    title: string;
    description: string;
    measurements: any[];
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

interface MainProps {
    windowWidth: number;
    user: User;
}

export type {
    Experimet,
    Device,
    User,
    MainProps
}