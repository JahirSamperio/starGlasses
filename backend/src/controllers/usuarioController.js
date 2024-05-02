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

export {
    userProfile
}