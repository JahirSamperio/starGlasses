import {loginService } from "../services/authServices.js";
import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator';
import { generateId } from "../helpers/tokens.js";
import { emailRegistro } from "../helpers/emails.js";


const loginController = async (req = request, res = response) => {
    const {email, password} = req.body;
    try {
        let response = await loginService(email, password);
        if(response.lenght === 0) {
            return res.status(404).json({
                msg: "Usuario no encontrado"
            })
        }
        return res.status(200).json({
            response: response[0]
        });
    } catch (err) {
        return res.status(500).json({
            msg: "Informacion no encontrada"
        });
    }
}
const registerController = async (req, res) => {
    try {
         //Validacion
        await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('password').isLength({min: 8}).withMessage('Contraseña muy corta').run(req);

        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }

        //extraer los datos
        const {nombre, email, password} = req.body;

        //Verificar que no haya duplicados
        const existeUsuario = await Usuario.findOne({where: { email }});
        if(existeUsuario) {
            return res.json({
                msg: "Este usuario ya existe"
            })
        }

        const usuario = await Usuario.create({
            nombre, 
            email, 
            password,
            token: generateId()
        });
        
        res.json({
            msg: "Hemos enviado un correo de confirmacion, confirme su cuenta"
        });

        //Envia email de confirmacion
        emailRegistro({
            nombre: usuario.nombre,
            email: usuario.email,
            token: usuario.token,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            error: 'Ocurrió un error al procesar la solicitud' 
        });
    }
}

//Funcion que comprueba una cuenta
const confirmarController = async (req, res, next) => {
    const {token} = req.params
    console.log(token);

    //Verificar si el codigo es valido

    //Confirmar cuenta
    
}


export {
    loginController,
    registerController,
    confirmarController
};