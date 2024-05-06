import {Carrito, Usuario, Producto, Precio } from '../models/asosiations.js'

const agregarCarrito = async (req, res) => {
    try {
        const {id_producto, id_usuario} = req.params;

        //Busca si existe el producto en el carrito
        const agregado = await Carrito.findOne({where: {id_producto, id_usuario} })
        
        //Si es que existe, agrega una unidad
        if(agregado){  
            await Carrito.update({
                unidades: agregado.unidades + 1
            }, {
                where: {id_producto, id_usuario}
            })
        } else {  //Si no existe, agrega el producto al carrito
            await Carrito.create({
                id_usuario,
                id_producto,
                unidades: 1
            })
        }
        return res.status(200).json({
            msg: "Agregado al carrito exitosamente"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const modificarCarrito = async (req, res) => {
    try {
        const {id_producto, id_usuario} = req.params;
        const {unidades} = req.body; 

        //modifica las unidades del producto
        await Carrito.update({
            unidades
        }, {
            where: {id_producto, id_usuario}
        })

        res.status(200).json({
            msg: "Modificado exitosamente"
        })

    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const {id_cart} = req.params

        //Busca el registro y lo elimina
        await Carrito.destroy({where: {id_cart}});

        res.status(200).json({
            msg: "Eliminado exitosamente"
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const obtenerCarrito = async (req, res) => {
    try {
        const {id_usuario} = req.params
        const carrito = await Carrito.findAll({
            include: [{
                model: Producto,
                attributes: ['id_lentes','nombre','marca','color','existencia', 'imagen'],
                include:{
                    model: Precio,
                    attributes: [
                        'id_precio',
                        'precio_venta',
                        'oferta',
                        'fecha_fin_oferta'
                    ]
                }
            },{
                model: Usuario,
                attributes: ['id_usuario', 'nombre', 'apellido_paterno', 'apellido_materno']
            }],
            attributes: ['id_cart','unidades'],
            where: {id_usuario}
        })

        return res.status(200).json({
            carrito
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}


export {
    agregarCarrito,
    modificarCarrito,
    eliminarProducto,
    obtenerCarrito
}