import {login} from '../models/auth.js';
import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator';

const loginService = async (email, password) => {
    try {
        let response = await login(email, password);
        return response;
    } catch (error) {
        return error;
    }
}


export {
    loginService
};
