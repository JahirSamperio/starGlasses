import {Carrito, Usuario, Producto, Precio } from '../models/asosiations.js'

const agregarCarrito = async (req, res) => {
    try {
        const {id_producto, id_usuario} = req.params;
        console.log(req.params);

        const agregado = await Carrito.findOne({where: {id_producto, id_usuario} })
        if(agregado){  
            await Carrito.update({
                unidades: agregado.unidades + 1
            }, {
                where: {id_producto, id_usuario}
            })
        } else { 
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

export {
    agregarCarrito
}