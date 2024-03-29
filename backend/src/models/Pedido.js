import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'


const Pedido = conexion.define('pedido', {
    id_lentes: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})