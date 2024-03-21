import Producto from '../models/Producto.js';
import { check, validationResult } from 'express-validator';
import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

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
        await check('existencia').notEmpty().withMessage('La existencia no puede ir vacia').run(req);
        await check('proveedor').notEmpty().withMessage('El proveedor no puede ir vacio').run(req);
        await check('descripcion').notEmpty().withMessage('La descripcion no puede ir vacia').run(req);
        
        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }
        //Extraer datos
        const {nombre, tipo, marca, material, color, graduacion, tamano, existencia, proveedor, descripcion} = req.body;
        
        
        //Verificar que no haya productos duplicados
        // const existeProducto = await Producto.findOne({where: {nombre}});
        // if (!existeProducto){
        //     return res.json({
        //         msg: "Este producto ya existe"
        //     })
        // }

        //Cargar imagen a cloudinary y extraer url
        try {
            const {imagen} = req.files
            // Subir el archivo a Cloudinary y obtener la URL segura
            const {secure_url} = await cloudinary.uploader.upload(
                imagen.tempFilePath, {
                    // public_id: `${Date.now()}`, 
                    resource_type: "auto"
            });

            req.body.imagen = secure_url;
        } catch (error) {
            console.error('Error al cargar la imagen a Cloudinary:', error);
            throw new Error('Error al cargar la imagen a Cloudinary');
        }
        
     
        
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
            imagen: req.body.imagen
        });
        
        console.log(producto);
        return res.status(200).json({
            msg: "Producto guardado correctamente"
        })

    } catch (err) {
        return res.status(500).json({
            msg: "Error en el servidor"
        })
    }
}

export {
    newProduct
}