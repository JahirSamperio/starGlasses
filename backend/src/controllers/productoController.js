import {Producto, Precio} from '../models/asosiations.js';
import { check, validationResult } from 'express-validator';
import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

import uploadCloudinary from '../uploads/uploads.js';

//Configurando cloudinary
cloudinary.config(process.env.CLOUDINARY_URL);

const newProduct =  async (req = request, res = response) => {
    console.log(req.body);

    try {
        //Validacion del formulario
        await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('tipo').notEmpty().withMessage('El tipo no puede ir vacio').run(req);
        await check('marca').notEmpty().withMessage('La marca no puede ir vacia').run(req);
        await check('material').notEmpty().withMessage('El material no puede ir vacio').run(req);
        await check('color').notEmpty().withMessage('El color no puede ir vacio').run(req);
        await check('graduacion').notEmpty().withMessage('La graduacion no puede ir vacia').run(req);
        await check('tamano').notEmpty().withMessage('El tamano no puede ir vacio').run(req);
        await check('existencia').notEmpty().isNumeric().withMessage('Valor inválido').run(req);
        await check('proveedor').notEmpty().withMessage('El proveedor no puede ir vacio').run(req);
        await check('descripcion').notEmpty().withMessage('La descripcion no puede ir vacia').run(req);
        await check('precio').notEmpty().isNumeric().withMessage('Precio inválido').run(req);

        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }
        //Extraer datos
        const {nombre, tipo, marca, material, color, graduacion, tamano, existencia, proveedor, descripcion, precio, precio_compra} = req.body;
        
        //Creando el precio del producto en la tabla producto_precio_lentes
        const precio_producto = await Precio.create({
            precio_venta: precio,
            precio_compra
        })
  
        
        //Cargar imagen a cloudinary y extraer url
        const secure_url = await uploadCloudinary(req);
        req.body.imagen = secure_url;
            
        const producto = await Producto.create({
            nombre,
            tipo,
            marca,
            material,
            color,
            graduacion,
            tamano,
            existencia,
            proveedor,
            descripcion,
            imagen: req.body.imagen,
            id_precio:  precio_producto.id_precio
        });
        return res.status(200).json({
            msg: "Producto guardado correctamente"
        })

    } catch (err) {
        return res.status(500).json({
            msg: "Error en el servidor"
        })
    }
}

const agregarOferta = async (req, res) => {
    try {
        //Validar formulario
        await check('oferta').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('fecha_inicio_oferta').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
        await check('fecha_fin_oferta').notEmpty().withMessage('El nombre no puede ir vacio').run(req);
    
        //Checar errores
        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }
        
        //Extraer datos
        const { oferta, fecha_inicio_oferta, fecha_fin_oferta } = req.body;
        const { id_lentes } = req.params;

        
        //Llamando al producto
        const producto = await Producto.findOne({where: { id_lentes }})
        const id_precio = producto.id_precio;
                
        const producto_oferta = Precio.update({
            oferta,
            fecha_inicio_oferta,
            fecha_fin_oferta
        }, { where: { id_precio } });

        return res.status(200).json({
            msg: "Oferta guardada exitosamente"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor"
        })
    }
}

const eliminarProducto = async (req, res) => {
    try {
        //Obtener id
        const { id_lentes } = req.params;

        //Llamando al producto
        const producto = await Producto.findOne({where: { id_lentes }})
        const id_precio = producto.id_precio;

        //Eliminar producto
        await Producto.destroy({where: { id_lentes }});

        //Eliminar el registro en la tabla precio
        await Precio.destroy({where: { id_precio }});

        return res.status(200).json({
            msg: "Producto eliminado exitosamente"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}

const modificarProducto = async (req, res) => {
    try {
        //Validacion del formulario
        await check('existencia').isNumeric().withMessage('Valor inválido').run(req);
        await check('precio').isNumeric().withMessage('Precio inválido').run(req);

        //Obtener id
        const { id_lentes } = req.params;
        
        //Llamando al producto
        const producto = await Producto.findOne({where: { id_lentes }})

        //Extrayendo el id de la tabla precio
        const id_precio = producto.id_precio;
        
        //Extrayendo datos
        const { nombre, tipo, marca, material, color, graduacion, tamano, existencia, proveedor, descripcion, precio, precio_compra } = req.body;

        //Verificar campos nulos
        const camposActualizados = {};
        if (nombre !== null) camposActualizados.nombre = nombre;
        if (tipo !== null) camposActualizados.tipo = tipo;
        if (marca !== null) camposActualizados.marca = marca;
        if (material !== null) camposActualizados.material = material;
        if (color !== null) camposActualizados.color = color;
        if (graduacion !== null) camposActualizados.graduacion = graduacion;
        if (tamano !== null) camposActualizados.tamano = tamano;
        if (existencia !== null) camposActualizados.existencia = existencia;
        if (proveedor !== null) camposActualizados.proveedor = proveedor;
        if (descripcion !== null) camposActualizados.descripcion = descripcion;
        
        //Actualizar precios
        if (precio !== null) {
            await Precio.update({
                precio_venta: precio
            }, {where: { id_precio }})
        }
        if (precio_compra !== null){
            await Precio.update({
                precio_compra
            }, {where: { id_precio }})
        }
        
        //Cargar imagen a cloudinary y extraer url
        if (req.files !== null) {
            const secure_url = await uploadCloudinary(req);
            camposActualizados.imagen = secure_url;
        }

        //Actualizar producto
        const productoActualizado = await Producto.update(camposActualizados, {where: { id_lentes }})

        return res.status(200).json({
            msg: "Producto actualizado exitosamente"
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}

const perfilProducto = async (req, res) => {
    try {
        const { id_lentes } = req.params;

        const producto = await Producto.findOne({where: { id_lentes }});
        return res.status(200).json({
            producto
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}

const allProducts = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        return res.status(200).json({
            productos
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}

export {
    newProduct,
    agregarOferta,
    eliminarProducto,
    modificarProducto,
    perfilProducto,
    allProducts
}