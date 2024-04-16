import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'


const Envio = conexion.define('envio', {
    id_envio: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_pedido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_envio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Envio;