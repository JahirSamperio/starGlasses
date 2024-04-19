import { Pago, Usuario, Pedido, Prod_pedido } from '../models/asosiations.js'
import { Sequelize } from 'sequelize';
import fecha_actual from '../helpers/fecha_actual.js';

const getVentas = async(req, res) => {
    try {
        const ventas = await Pago.findAll({
            include: [
                {
                    model: Pedido,
                    as: 'pedido',
                    attributes: ['fecha_pedido', 'id_pedido', 'metodo_pago']
                },
                {
                    model: Usuario,
                    as: 'usuario',
                    attributes: ['nombre', 'apellido_paterno']
                }
            ],
            attributes: ['monto', 'estado'],
            order: [[{ model: Pedido, as: 'pedido' }, 'fecha_pedido', 'DESC']] 
        });

        return res.status(200).json({
            ventas
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const ventasHoy = async(req, res) => {
    try {

        const fecha_pedido = fecha_actual.toISOString().split('T')[0];
        console.log(fecha_pedido);        
        const ventas = await Pago.findAll({
            include: [
                {
                    model: Pedido,
                    as: 'pedido',
                    attributes: ['fecha_pedido', 'id_pedido', 'metodo_pago'],
                    where: { '$pedido.fecha_pedido$': fecha_pedido }
                },
                {
                    model: Usuario,
                    as: 'usuario',
                    attributes: ['nombre', 'apellido_paterno']
                }
            ],
            attributes: ['monto', 'estado'],
            order: [[{ model: Pedido, as: 'pedido' }, 'fecha_pedido', 'DESC']]
        });

        return res.status(200).json({
            ventas
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    getVentas,
    ventasHoy
}