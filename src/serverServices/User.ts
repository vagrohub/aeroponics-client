import { Error } from './interface';
import Services from './Services';

interface MainInfoUser {
    username: string;
    email: string;
}
class User extends Services {
    path = '/user'

    async getData(): Promise<MainInfoUser | Error> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
            const serializeResponse = await response.json();


            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error'};
        }
    }

    async changePassword(password: string): Promise<boolean> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/password/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    password
                })
            });

            return response.ok
        } catch {
            return false;
        }
    }

    async changeUsername(username: string): Promise<boolean> {
        try {
            this.checkAuth();
            const response = await fetch(`${this.host}${this.path}/username/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    username
                })
            });

            return response.ok
        } catch {
            return false;
        }
    }
}

export default User;