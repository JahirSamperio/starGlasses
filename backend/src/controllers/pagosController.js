import { Pago, Usuario, Pedido, Prod_pedido } from '../models/asosiations.js'
import { Sequelize, Op } from 'sequelize';
import fecha_actual from '../helpers/fecha_actual.js';

const listaPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll({limit: 8 });
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
        const pago = await Pago.findOne({ where: {id_pago}})

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