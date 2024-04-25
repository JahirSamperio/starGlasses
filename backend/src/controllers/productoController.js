import {Producto, Precio, Prod_pedido} from '../models/asosiations.js';
import { check, validationResult } from 'express-validator';
import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'
import {Sequelize} from 'sequelize'
import stripe from 'stripe';
const stripeCliente = stripe(process.env.STRIPE_SECRET_KEY);
import prodMasVendido from '../models/MasVendido.js';
import { response } from 'express';
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
        
        
        //Cargar imagen a cloudinary y extraer url
        const secure_url = await uploadCloudinary(req);
        req.body.imagen = secure_url;
        
        //Creando el producto y precio en Stripe
        const product = await stripeCliente.products.create({
            name: nombre,
            description: descripcion,
            images: [secure_url]
        });


        //Pasar precio a integral y multiplicarlo por 100 para los centavos y sea admitido por stripe
        const precioStripe = precio * 100;
        //Creando el producto y precio en Stripe
        const price = await stripeCliente.prices.create({
            product: product.id,
            unit_amount: precioStripe,
            currency: 'mxn',
        });
        
        //Creando el precio del producto en la tabla producto_precio_lentes
        const precio_producto = await Precio.create({
            id_precio: price.id,
            precio_venta: precio,
            precio_compra
        })
        //Creando el producto en nuestra BD
        const producto = await Producto.create({
            id_lentes: product.id,
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
            id_precio: price.id
        });
        return res.status(200).json({
            msg: "Producto guardado correctamente"
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Error en el servidor",
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

        const producto = await Producto.findOne({
            where: { id_lentes },
            include:{
                model: Precio,
                attributes: [
                    'precio_venta',
                    'oferta',
                    'fecha_fin_oferta'
                ]
            }});
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
        const productos = await Producto.findAll({
            include: [{
                model: Precio
                // attributes: [
                //     'precio_venta',
                //     'oferta',
                //     'fecha_fin_oferta'
                // ]
            }]
        });
        return res.status(200).json({
            productos
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}

const allOffers = async (req, res) => {
    try {
        const ofertas = await Producto.findAll({
            include:{
                model: Precio,
                where: {
                    estado:{
                        [Sequelize.Op.or]: ["activa", "Activa"]
                    }
                } 
            }
        });

        return res.status(200).json({
            ofertas
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error en el servidor",
            error
        });
    }
}

const getStock = async (req, res) => {
    try {
        const allStock = await Producto.findAll({
            attributes:[
                'nombre',
                'marca',
                'existencia',
                'updatedAt'
            ]
        })
        return res.status(200).json({
            allStock
        })
    } catch (error) {
        return res.status(500).json({ 
            error: 'Ocurrió un error al procesar la solicitud' 
        });
    }
}

const descStock = async (req, res) => {
    try {
        const descStock = await Producto.findAll({
            order: [
                ['existencia', 'ASC']
            ],
            limit: 10 // Limita a 10 resultados
        })
        return res.status(200).json({
            descStock
        })
    } catch (err) {
        return res.status(500).json({
            error: 'Error en el servidor',
            err
        })
    }
}

const ascStock = async (req, res) => {
    try {
        const ascStock = await Producto.findAll({
            order: [
                ['existencia', 'DESC']
            ], 
            limit: 10 // Limita a 10 resultados
        })
        return res.status(200).json({
            ascStock
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Error en el servidor'
        })
    }
}

const masVendido = async (req, res) => {
    try {
        const productos = await Prod_pedido.findAll({
            include: {
                model: Producto,
                include: {
                    model: Precio,
                    attributes: [
                        'precio_venta', 
                        'precio_compra'
                    ]
                },          
                attributes: ['nombre']          
            },
            attributes: [
                'id_lentes', 
                [Sequelize.fn('SUM', Sequelize.col('cantidad')), 'Total de productos'], 
            ],
            group: ['id_lentes'],
            order: [['Total de productos', 'DESC']]
        });

        return res.status(200).json({
            productos
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}



export {
    newProduct,
    agregarOferta,
    eliminarProducto,
    modificarProducto,
    perfilProducto,
    allProducts,
    allOffers,
    getStock,
    descStock,
    ascStock,
    masVendido
}