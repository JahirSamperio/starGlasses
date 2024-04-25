import { Pedido } from '../models/asosiations.js'

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        
        return res.status(200).json({
            pedidos
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const detallesPedido = async (req, res) => {
    try {
        const { id_pedido } = req.params
        
        const pedido = await Pedido.findOne({where: {id_pedido}})

        return res.status(200).json({
            pedido
        })

    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//Buscar estados 
const filtroPedido = async (req, res) => {
    try {
        const {estado} = req.body;
        const pedidos = await Pedido.findAll({where: {estado}})

        return res.status(200).json({
            pedidos
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

//Estado disponibles: pendiente, confirmado, cancelado
const actualizarEstado = async (req, res) => {
    try {
        const { estado } = req.body;
        const { id_pedido } = req.params;

        const pedido = await Pedido.update({
            estado
        }, {
            where: { id_pedido }
        })

        return res.status(200).json({
            msg: "Pedido actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const pedidosRecientes = async (req, res) => {
    try {
        //busca pedidos recientes 
        const pedidos = await Pedido.findAll({
            order: [['fecha_pedido', 'DESC']],
            limit: 6
        })
        return res.status(200).json({
            pedidos
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    getPedidos,
    detallesPedido,
    filtroPedido,
    actualizarEstado,
    pedidosRecientes
}