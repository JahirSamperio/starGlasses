import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'

const Carrrito = conexion.define('shopping_cart', {
    id_cart: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidades:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Carrrito;