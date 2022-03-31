import Services from './Services';
import ResponseError from './basic/ResponseError';
import { Experiment as IExperiment } from '../interface/User';

interface ExperimentId {
    id: string;
}
interface Experiments {
    experimentsInCycle: IExperiment[];
    currentExperiment: IExperiment
}

class Experiment extends Services {
    path = '/experiment';

    async getById(id: string): Promise<IExperiment | ResponseError> {
        try {
            const response = await fetch(`${this.host}${this.path}/?id=${id}`);
            const serializeResponse = await response.json();

            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }

    async getListByDeviceName(name: string): Promise<Experiments | ResponseError> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/list/?name=${name}`, {
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

    async createNew(title: string, description: string): Promise<ExperimentId | ResponseError> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/new`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    title,
                    description
                })
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }

    async edditTitle(title: string, id: string): Promise<IExperiment | ResponseError> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/title`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    title,
                    id
                })
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }

    async edditDescription(description: string): Promise<IExperiment | ResponseError> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/description`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
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

export default Experiment;
export type { Experiments, IExperiment };