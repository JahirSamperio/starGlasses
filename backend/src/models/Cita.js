import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'

const Cita = conexion.define('cita', {
    id_cita: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    motivo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    antecedentes: DataTypes.STRING,
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Cita;