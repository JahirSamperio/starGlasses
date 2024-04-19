import { Sequelize } from 'sequelize';
import { Producto, Precio, Pedido, Prod_pedido, Envio, Direccion } from '../models/asosiations.js'
import { generateId } from '../helpers/tokens.js';
import { check, validationResult } from 'express-validator';

const agregarDireccion = async (req, res) => {
    try {
        await check('direccion').notEmpty().withMessage('La dirección no puede estar vacía').run(req);
        await check('estado').notEmpty().withMessage('El estado no puede estar vacío').run(req);
        await check('ciudad').notEmpty().withMessage('La ciudad no puede estar vacía').run(req);
        await check('colonia').notEmpty().withMessage('La colonia no puede estar vacía').run(req);
        await check('calle').notEmpty().withMessage('La calle no puede estar vacía').run(req);
        await check('numero').notEmpty().withMessage('El número no puede estar vacío').run(req);
        await check('codigo_postal').notEmpty().withMessage('El código postal no puede estar vacío').run(req);
        await check('telefono_contacto').notEmpty().withMessage('El teléfono de contacto debe ser un número de teléfono válido en México').run(req);

        //Extraer id_usaurio del URL
        const { id_usuario } = req.params;

        //Validar errores de los forms
        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }

        const { direccion, estado, ciudad, colonia, calle, numero, codigo_postal, telefono_contacto } = req.body;

        const id_direccion = generateId();

        const usuario_direccion = await Direccion.create({
            id_direccion: id_direccion,
            id_usuario: id_usuario,
            direccion: direccion,
            estado: estado,
            ciudad: ciudad,
            colonia: colonia,
            calle: calle,
            numero: numero,
            codigo_postal: codigo_postal,
            telefono_contacto: telefono_contacto
        })

        return res.status(200).json({
            msg: "Direccion agregada exitosamente!"
        })

    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const editarDireccion = async (req, res) => {
    try {
        const { id_direccion } = req.params
        const { direccion, estado, ciudad, colonia, calle, numero, codigo_postal, telefono_contacto } = req.body;

        const usuario_direccion = await Direccion.update({
            direccion: direccion,
            estado: estado,
            ciudad: ciudad,
            colonia: colonia,
            calle: calle,
            numero: numero,
            codigo_postal: codigo_postal,
            telefono_contacto: telefono_contacto
        },
        {
            where: {
                id_direccion
            }
        })

        console.log(usuario_direccion);
        return res.status(200).json({
            msg: "Direccion actualizada exitosamente!"
        })

    } catch (error) {
        return res.status(500).json({
            err: error
        })
    }
}

const getDireccion = async (req, res) => {
    try {
        const { id_usuario } = req.params
        const direcciones = await Direccion.findAll({where: { id_usuario }});

        return res.status(200).json({
            direcciones
        })
    } catch (error) {
        return res.status(500).json({
            err: "Error en el servidor"
        })
    }
}
export {
    agregarDireccion,
    editarDireccion,
    getDireccion
}