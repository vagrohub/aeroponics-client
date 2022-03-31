import { createContext, useState } from 'react';
import AuthService, { ResponseAuth } from '../serverServices/Auth';
import ResponseError from '../serverServices/basic/ResponseError';
import Token from '../serverServices/basic/Token';

interface IAuthProviderValue {
    token: Token | null;
    login(email: string, password: string, cb: Function): void;
    registration(email: string, username: string, password: string, cb: Function): void;
    signout(cb: Function): void;
}
const AuthContext = createContext<IAuthProviderValue>({
    token: null,
    login(email: string, password: string, cb: Function): void {},
    registration(email: string, username: string, password: string, cb: Function): void {},
    signout(cb: Function): void {}
});

interface IAuthProvider {
    children: JSX.Element[] | JSX.Element
}
const AuthProvider = ({ children }: IAuthProvider) => {
    const currentValueToken = localStorage.getItem('token');
    const currentToken = currentValueToken ? new Token(currentValueToken) : null;

    const [token, setToken] = useState<null | Token>(currentToken);
    const authService = new AuthService();

    const authResponseHandler = (response: ResponseAuth, cb?: Function) => {
        if (response instanceof ResponseError) {
            throw new Error(response.error);
        }

        setToken(token);
        if (cb) cb();
    };

    const login = async (
        email: string,
        password: string,
        cb: Function
    ) => {
        const response = await authService.login(email, password);

        authResponseHandler(response, cb);
    };

    const registration = async (
        email: string,
        username: string,
        password: string,
        cb: Function
    ) => {
        const response = await authService.registration(email, username, password);

        authResponseHandler(response, cb);
    };

    const signout = (cb: Function) => {
        authService.logout();
        setToken(null)
        cb();
    };

    const value = {
        token,
        login,
        registration,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext
}
export default AuthProvider;