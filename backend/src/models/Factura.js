import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'

const Factura = conexion.define('factura', {
    id_factura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_pago: {
        type: DataTypes.STRING
        // allowNull: false
    },
    url_pdf: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Factura;