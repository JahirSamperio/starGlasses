import 'dotenv/config';
import { Sequelize } from 'sequelize';
import { Producto, Precio, Pedido, Prod_pedido, Envio } from '../models/asosiations.js'
import { generateId } from '../helpers/tokens.js';
import { check, validationResult } from 'express-validator';

const crearEnvio = async (req, res) => {
    try {
        await check('fecha_envio').notEmpty().withMessage('La fecha no puede ir vacia').run(req);
        await check('fecha_entrega').notEmpty().withMessage('La fecha no puede ir vacia').run(req);

        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }

        const {id_pedido, fecha_envio, fecha_entrega} = req.body;
        const estado = "En preparación";
        const id_envio = generateId();
        const envio = await Envio.create({
            id_envio: id_envio,
            id_pedido: id_pedido,
            fecha_envio: fecha_envio,
            fecha_entrega: fecha_entrega,
            estado: estado
        })

        return res.status(200).json({
            msg: "Envio creado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const actualizarEnvio = async (req, res) => {
    try {
        await check('estado').notEmpty().withMessage('El estado no puede ir vacio').run(req);

        const { id_envio } = req.params;

        const { fecha_entrega, estado} = req.body;
        const envio = await Envio.update({
            fecha_entrega: fecha_entrega, 
            estado: estado
        },
        {
            where: {
                id_envio
            }
        })
        console.log(envio);
        
        return res.status(200).json({
            msg: "Envio actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({
            err: error
        })
    }
}

export {
    crearEnvio,
    actualizarEnvio
}