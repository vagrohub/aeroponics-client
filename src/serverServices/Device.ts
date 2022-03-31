import Services from './Services';
import ResponseError from './basic/ResponseError';

interface MainInfoDevice {
    name: string;
    description: string;
    id: string;
}
interface Status {
    status: boolean;
}

class Device extends Services {
    path = '/device';

    async getById(id: string): Promise<MainInfoDevice | ResponseError> {
        try {
            const response = await fetch(`${this.host}${this.path}/?id=${id}`);
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }

    async getList(): Promise<MainInfoDevice[] | ResponseError> {
        try {
            const response = await fetch(`${this.host}${this.path}/list`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }

    async createNew(
        name: string, 
        password: string,
        description: string
    ): Promise<Status | ResponseError> {
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
            return new ResponseError(error.message);
        }
    }

    async stopCurrentExperiment(id: string): Promise<Status | ResponseError> {
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
            return new ResponseError(error.message);
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
            return new ResponseError(error.message);
        }
    }
}

export default Device;
export type { MainInfoDevice }