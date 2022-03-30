import Services from './Services';
import { Error } from './interface';

interface Device {
    name: string;
    description: string;
    id: string;
}
interface Status {
    status: boolean;
}

class Device extends Services {
    path = '/device';

    async getById(id: string): Promise<Device | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/?id=${id}`);
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }

    async getList(): Promise<Device[] | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/list`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }

    async createNew(
        name: string, 
        password: string,
        description: string
    ): Promise<Status | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/new`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    name,
                    password,
                    description
                })
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }

    async stopCurrentExperiment(id: string): Promise<Status | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/experiment`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    id
                })
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }

    async edditDescription(id: string, description: string) {
        try {
            const response = await fetch(`${this.host}${this.path}/experiment`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    id,
                    description
                })
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }
}

export default Device;