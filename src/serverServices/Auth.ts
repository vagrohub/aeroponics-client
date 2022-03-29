import { Error, Token } from './interface';
import Services from './Services';

class Auth extends Services {
    path = '/auth'

    async registration(
        email: string,
        username: string,
        password: string
    ): Promise<Token | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password
                })
            });
            const serializeResponse = await response.json();

            if (serializeResponse.token) {
                const { token } = serializeResponse;
                localStorage.setItem('token', token);
            }

            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error'};
        }
    }

    async login(email: string, password: string): Promise<Token | Error> {
        try {
            const response = await fetch(`${this.host}${this.path}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const serializeResponse = await response.json();

            if (serializeResponse.token) {
                const { token } = serializeResponse;
                localStorage.setItem('token', token);
            }

            return serializeResponse;
        } catch (error: any) {
            return { error: error.message || 'unknown error'};
        }
    }

    logout(): boolean {
        this.checkAuth();
        localStorage.removeItem('token');
        return true;
    }
}

export default Auth;