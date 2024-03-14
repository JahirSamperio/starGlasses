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
// const registerService = async (req, res) => {
//     //Validacion
//     await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
//     await check('email').isEmail().withMessage('Correo no valido').run(req);
//     await check('password').isLength({min: 8}).withMessage('Contraseña muy corta').run(req);

//     let errores = validationResult(req);
    

//     const usuario = await Usuario.create(req.body);
//     res.json(usuario);
// }

export {
    loginService
};
