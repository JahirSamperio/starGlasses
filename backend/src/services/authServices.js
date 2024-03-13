import {login, registerModel} from '../models/auth.js';

const loginService = async (email, password) => {
    try {
        let response = await login(email, password);
        return response;
    } catch (error) {
        return error;
    }
}
const registerService = async (data) => {
    try {
        let response = await registerModel(data)
        return response;
    } catch (error) {
        return error;
    }
}

export {
    loginService, 
    registerService
};
