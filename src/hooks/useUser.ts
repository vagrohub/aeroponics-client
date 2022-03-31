import ResponseError from '../serverServices/basic/ResponseError';
import UserService from '../serverServices/User';

const useUser = async () => {
    const userService = new UserService();
    const response = await userService.getData();

    if (response instanceof ResponseError) {
        return response;
    }

    return {
        user: response
    }
};

export default useUser;