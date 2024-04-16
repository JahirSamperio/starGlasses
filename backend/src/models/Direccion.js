import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'


const Direccion = conexion.define('usuario_direccion', {
    id_direccion: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    colonia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono_contacto: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Direccion;