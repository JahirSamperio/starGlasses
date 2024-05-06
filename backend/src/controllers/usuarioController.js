import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator';
import stripe from 'stripe';

const userProfile = async (req, res) => {
    try {
        const {id_usuario} = req.params;
        const usuario = await Usuario.findOne({id_usuario})

        return res.status(200).json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const modificarInfo = async (req, res) => {
    try {
        const {id_usuario} = req.params;
        const {nombre, apellido_paterno, apellido_materno, telefono} = req.body;
        
        await Usuario.update({
            nombre, 
            apellido_paterno, 
            apellido_materno, 
            telefono
        }, {
            where: {id_usuario}
        })

        res.status(200).json({
            msg: "Informacion modificada exitosamente"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}
export {
    userProfile,
    modificarInfo
}