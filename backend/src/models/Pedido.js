import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'


const Pedido = conexion.define('pedido', {
    id_pedido: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metodo_pago: DataTypes.STRING
})

export default Pedido