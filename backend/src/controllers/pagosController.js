import { Pago, Usuario, Pedido, Prod_pedido } from '../models/asosiations.js'
import { Sequelize, Op } from 'sequelize';
import fecha_actual from '../helpers/fecha_actual.js';

const listaPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll({
            include: [{
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email']
            }, {
                model: Pedido,
                attributes: ['fecha_pedido', 'metodo_pago']
            }],
            attributes: ['id_pago', 'monto', 'estado'],
            limit: 8 
        });
        return res.status(200).json({
            pagos
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const detallesPagos = async (req, res) => {
    try {
        const { id_pago } = req.params
        const pago = await Pago.findOne({ 
            include: [{
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
            }, {
                model: Pedido,
                attributes: ['id_pedido', 'fecha_pedido', 'estado', 'metodo_pago']
            }],
            attributes: ['id_pago', 'monto', 'moneda','estado'],
            where: {id_pago}
        })

        return res.status(200).json({
            pago
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    listaPagos,
    detallesPagos
}