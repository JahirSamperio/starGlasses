import { Pedido, Usuario, Direccion } from '../models/asosiations.js'

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll({
            include: {
                model: Direccion,
                include: {
                    model: Usuario,
                    attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email']
                },
                attributes: ['direccion']
            },
            attributes: ['id_pedido','fecha_pedido', 'estado']
        });
        
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
        
        const pedido = await Pedido.findOne({
            include: {
                model: Direccion,
                attributes: ['direccion', 'estado', 'ciudad', 'colonia', 'calle', 'numero', 'codigo_postal', 'telefono_contacto'],
                include: {
                    model: Usuario,
                    attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
                }
            },
            attributes: ['id_pedido', 'fecha_pedido', 'estado', 'metodo_pago'],
            where: { id_pedido }
        })

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
        const pedidos = await Pedido.findAll({
            include: {
                model: Direccion,
                include: {
                    model: Usuario,
                    attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email']
                },
                attributes: ['direccion']
            },
            attributes: ['id_pedido','fecha_pedido', 'estado'],
            where: { estado }
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
            include: {
                model: Direccion,
                attributes: ['direccion', 'estado', 'ciudad', 'colonia', 'calle', 'numero', 'codigo_postal', 'telefono_contacto'],
                include: {
                    model: Usuario,
                    attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
                }
            },
            attributes: ['id_pedido', 'fecha_pedido', 'estado', 'metodo_pago'],
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