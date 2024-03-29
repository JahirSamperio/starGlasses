import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js'  



const Producto = conexion.define('producto_lentes', {
    id_lentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    graduacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tamano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    existencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,  // Puedes ajustar el tipo de dato según cómo guardes las imágenes en tu aplicación
        allowNull: false
    },id_precio: {
        type: DataTypes.INTEGER,
    }
})



export default Producto