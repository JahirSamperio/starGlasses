import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'

const Pago = conexion.define('pago', {
    id_pago: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_sesion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_pedido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    moneda: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Pago;
