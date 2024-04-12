import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'


const Prod_pedido = conexion.define('prod_pedido', {
    id_prod_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_pedido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_lentes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Prod_pedido