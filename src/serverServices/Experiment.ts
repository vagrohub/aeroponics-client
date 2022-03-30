import Services from './Services';
import { Error } from './interface';
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

    async getById(id: string): Promise<IExperiment | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/?id=${id}`);
            const serializeResponse = await response.json();

            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error' };
        }
    }

    async getListByDeviceName(name: string): Promise<Experiments[] | Error> {
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
            return { error: error.message || 'unknown error' };
        }
    }

    async createNew(title: string, description: string): Promise<ExperimentId | Error> {
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
            return { error: error.message || 'unknown error' };
        }
    }

    async edditTitle(title: string, id: string): Promise<IExperiment | Error> {
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
            return { error: error.message || 'unknown error' };
        }
    }

    async edditDescription(description: string): Promise<IExperiment | Error> {
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
            return { error: error.message || 'unknown error' };
        }
    }
}

export default Experiment;