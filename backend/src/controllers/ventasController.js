import { Pago, Usuario, Pedido, Prod_pedido } from '../models/asosiations.js'
import { Sequelize, Op,fn } from 'sequelize';
import fecha_actual from '../helpers/fecha_actual.js';

const getVentas = async (req, res) => {
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

const ventasHoy = async (req, res) => {
    try {
        const fecha_pedido = fecha_actual.toISOString().split('T')[0];
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

const ventasMes = async (req, res) => {
    try {
        const fecha_actual = new Date();
        const mes = fecha_actual.getMonth() + 1; // El mes actual
        const año = fecha_actual.getFullYear(); // El año actual

        const ventas = await Pago.findAll({
            include: {
                model: Pedido,
                as: 'pedido',
                where: {
                    fecha_pedido: {
                        [Op.and]: [
                            Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('fecha_pedido')), mes),
                            Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('fecha_pedido')), año)
                        ]
                    }
                }
            }
        })

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

const ingresosPeriodo = async (req, res) => {
    try {
        let ingresos;
        let totalIngresos = 0;
        const { periodo } = req.body;
        switch (periodo) {
            case 'Mes':
                const fechaActual = new Date();
                const mes = fechaActual.getMonth() + 1; // El mes actual
                const año = fechaActual.getFullYear(); // El año actual
                ingresos = await Pago.findAll({
                    include: {
                        model: Pedido,
                        where: {
                            fecha_pedido: {
                                [Op.and]: [
                                    Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('fecha_pedido')), mes),
                                    Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('fecha_pedido')), año)
                                ]
                            }
                        }
                    },
                    attributes: ['monto']
                })

                // Calcular la suma total de los ingresos
                totalIngresos = calcularIngresos(ingresos);
                break;
            case 'Dia':
                const fecha_pedido = fecha_actual.toISOString().split('T')[0];
                ingresos = await Pago.findAll({
                    include: [
                        {
                            model: Pedido,
                            as: 'pedido',
                            where: { '$pedido.fecha_pedido$': fecha_pedido }
                        }
                    ],
                    attributes: ['monto']
                });
                
                // Calcular la suma total de los ingresos
                totalIngresos = calcularIngresos(ingresos);
                break;
            case 'Año':
                const fecha = new Date();
                const anio = fecha.getFullYear(); // El año actual
                ingresos = await Pago.findAll({
                    include: {
                        model: Pedido,
                        as: 'pedido',
                        where: {
                            fecha_pedido: {
                                [Op.and]: [
                                    Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('fecha_pedido')), anio)
                                ]
                            }
                        }
                    },
                    attributes: ['monto']
                })
                 // Calcular la suma total de los ingresos
                 totalIngresos = calcularIngresos(ingresos);
                break;
            default:
                totalIngresos = 0;
                break;
        }

        return res.status(200).json({
            totalIngresos
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const calcularIngresos = (ingresos) => {
    let totalIngresos = 0;
    for(let i = 0; i<ingresos.length; i++){
        let monto = ingresos[i].monto;
        let numeroDecimal = parseFloat(monto);
        totalIngresos += numeroDecimal; 
    }
    return totalIngresos;
}
export {
    getVentas,
    ventasHoy,
    ventasMes,
    ingresosPeriodo
}