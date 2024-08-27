import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { generateId, generarJWT } from "../helpers/tokens.js";
import { emailRegistro, emailResetPassword } from "../helpers/emails.js";
import stripe from 'stripe';
const stripeCliente = stripe(process.env.STRIPE_SECRET_KEY);

//Autenticacion del usuario
const autenticar = async (req = request, res = response) => {
    try {
        //Validacion 
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('password').notEmpty().withMessage('Contraseña obligatoria').run(req);
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }

        //Extraer datos
        const { email, password } = req.body;
        console.log(email);

        //Verificar si el usuario existe
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({
                msg: "Usuario no existente"
            })
        }

        //Verificar si el usuario confirmo su cuenta
        if (!usuario.confirmado) {
            return res.status(404).json({
                msg: "Esta cuenta no esta confirmada"
            })
        }

        //Revisar password
        if (!usuario.verificarPassword(password)) {
            return res.status(401).json({
                msg: "La contraseña es incorrecta"
            })
        }

        //Autenticar usuario
        const userId = usuario.id_usuario;
        const userPrivilegio = usuario.privilegio;

        //Almacenar en un cookie
        return res.status(200).json({
            userId,
            userPrivilegio
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Ocurrió un error al intentar autenticar'
        });
    }
}

//Registro de usuario
const registerController = async (req, res) => {
    try {
        //Validacion
        await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('apellido_paterno').notEmpty().withMessage('El apellido  no puede ir vacio').run(req);
        await check('apellido_materno').run(req);
        await check('telefono').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('password').isLength({ min: 8 }).withMessage('Contraseña muy corta').run(req);

        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }

        //extraer los datos
        const { nombre, email, password, apellido_paterno, apellido_materno, telefono } = req.body;

        //Verificar que no haya duplicados
        const existeUsuario = await Usuario.findOne({ where: { email } });
        if (existeUsuario) {
            return res.status(409).json({
                msg: "Este usuario ya existe"
            })
        }

        //CREAR EL USUARIO CUANDO ENCUENTRE EL TOKEN Y SEA VALIDO, TOMA LOS DATOS CON EL TOKEN
        const usuarioStripe = await stripeCliente.customers.create({
            email: email,
            name: nombre
        });

        
        //Guarda el id del customer para hacer el checkout
        const usuario = await Usuario.create({
            id_usuario: usuarioStripe.id,
            nombre,
            email,
            password,
            apellido_paterno, 
            apellido_materno, 
            telefono,
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
const confirmarController = async (req, res) => {
    const { token } = req.params

    //Verificar si el token es valido
    const usuario = await Usuario.findOne({ where: { token } });
    if (!usuario) {
        return res.status(401).json({
            msg: 'Token no válido'
        })
    }


    usuario.token = null;
    usuario.confirmado = true;
    await usuario.save(); //Guarda los datos modificados anteriormente

    return res.status(200).json({
        msg: 'Cuenta confirmada. Ya puedes iniciar sesion'
    })
}

const resetPassword = async (req, res) => {
    try {
        //Validacion
        await check('email').isEmail().withMessage('Correo no valido').run(req);

        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            //Errores
            return res.status(400).json({
                errores: errores.array()
            });
        }
        const { email, nombre } = req.body;

        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(401).json({
                msg: "Este email no pertenece a ningun usuario"
            })
        }

        //Generar token
        usuario.token = generateId();
        await usuario.save();

        //Enviar email
        emailResetPassword({
            nombre: usuario.nombre,
            email: usuario.email,
            token: usuario.token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Ocurrió un error al procesar la solicitud'
        });
    }
}

//Funcion que comprueba un token
const comprobarToken = async (req, res) => {
    const { token } = req.params

    //Verificar si el token es valido
    const usuario = await Usuario.findOne({ where: { token } });
    if (!usuario) {
        return res.status(401).json({
            msg: 'Hubo un error al validar tu informacion'
        })
    }
    //Formulario para agregar nuevo token
    return res.status(200).json({
        msg: 'Agregue una nueva contraseña'
    })
}

const newPassword = async (req, res) => {
    try {
        //Crear nueva contraseña
        await check('password').isLength({ min: 8 }).withMessage('Contraseña muy corta').run(req);
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }
        const { password } = req.body
        const { token } = req.params

        //Identificar usuario
        const usuario = await Usuario.findOne({ where: { token } });

        //Hashear contraseña
        const salt = await bcrypt.genSalt(10)
        usuario.password = await bcrypt.hash(password, salt);
        usuario.token = null;

        await usuario.save();

        return res.status(200).json({
            msg: 'Contraseña reestablecida exitosamente!'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Ocurrió un error al procesar la solicitud'
        });
    }

}




export {
    autenticar,
    registerController,
    confirmarController,
    resetPassword,
    comprobarToken,
    newPassword
};