import {login} from '../models/auth';

const loginService = async (email, password) => {
    try {
        let response = await login(email, password);
        return response;
    } catch (error) {
        return error;
    }
}

export default loginService;
