import { Cita, Usuario } from '../models/asosiations.js'
import { generateId } from '../helpers/tokens.js';
import { check, validationResult } from 'express-validator';
import { Op } from 'sequelize'

const crearCita = async (req, res) => {
    try {
        await check('fecha_hora').notEmpty().withMessage('La fecha no puede ir vacia').run(req);
        await check('motivo').notEmpty().withMessage('El motivo no puede ir vacio').run(req);

        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.status(400).json({ 
                errores: errores.array() 
            });
        }

        const { id_usuario } = req.params;

        const { fecha_hora, motivo, antecedentes } = req.body;

        const existeCita = await Cita.findOne({ where: { fecha_hora } });
        if (existeCita) {
            return res.status(409).json({
                msg: "Ya hay una cita para este horario"
            })
        }

        const cita = await Cita.create({
            id_cita: generateId(),
            id_usuario,
            fecha_hora,
            motivo,
            antecedentes,
            estado: "Pendiente"
        })

        return res.status(200).json({
            msg: "Cita creada exitosamente!"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const actualizarEstado = async (req, res) => {
    try {
        await check('esatdo').notEmpty().withMessage('El estado no puede ir vacio').run(req);

        const { estado } = req.body;

        const { id_cita } = req.params;

        const updateCita = await Cita.update({
            estado
        }, {
            where: { id_cita }
        })

        return res.status(200).json({
            msg: "Estado actualizado exitosamente!"
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const getCitas = async(req, res) => {
    try {
        const citas = await Cita.findAll({
            include: {
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
            },
            attributes: ['id_cita', 'fecha_hora', 'estado', 'motivo', 'antecedentes']
        });

        return res.status(200).json({
            citas
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const filtroCitas = async (req, res) => {
    try {
        const { estado } =  req.body;

        const citas = await Cita.findAll({
            include: {
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
            },
            attributes: ['id_cita', 'fecha_hora', 'estado', 'motivo', 'antecedentes'],
            where: {estado}
        });

        return res.status(200).json({
            citas
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const proximasCitas = async (req, res) => {
    try {
        const fecha_hoy =  new Date();
        console.log(fecha_hoy);
        const citas = await Cita.findAll({
            include: {
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono']
            },
            attributes: ['id_cita', 'fecha_hora', 'estado', 'motivo', 'antecedentes'],
            where: {
                fecha_hora: { [Op.gt]: fecha_hoy }
            }
        })
        return res.status(200).json({
            citas
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}
export {
    crearCita,
    actualizarEstado,
    getCitas,
    filtroCitas,
    proximasCitas
}