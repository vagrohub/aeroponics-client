import { Token } from './interface';
import config from '../config';

class Services {
    host = config.HOST

    async checkConnection(): Promise<boolean> {
        try {
            const response = await fetch(this.host);

            if (response.ok) {
                return true;
            }

            return false;
        } catch {
            return false;
        }
    }

    checkAuth(): void {
        if (!localStorage.getItem('token')) {
            throw new Error('User not authorized');
        }
    }

    getToken(): Token {
        return { token: localStorage.getItem('token') || 'untoken' }
    }
}

export default Services;