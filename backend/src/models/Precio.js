import {DataTypes} from 'sequelize'
import conexion from '../db/conexion.js';

const Precio = conexion.define('producto_lentes_precio', {
    id_precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    precio_compra: DataTypes.DECIMAL,
    precio_venta: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    oferta: DataTypes.DECIMAL,
    fecha_inicio_oferta: {
        type: DataTypes.DATE,
        allowNull: function() {
            // La columna fecha_inicio_oferta será notNull solo cuando haya una oferta disponible
            return this.oferta !== null;
        }
    },
    fecha_fin_oferta: {
        type: DataTypes.DATE,
        allowNull: function() {
            // La columna fecha_inicio_oferta será notNull solo cuando haya una oferta disponible
            return this.oferta !== null;
        }
    },
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'Inactiva',
        allowNull: false
    }
}, {
    hooks: {
        beforeValidate: function(producto_lentes_precio) {
            // Cambia el estado a 'activa' si hay una oferta disponible
            if (!producto_lentes_precio.oferta !== null) {
                producto_lentes_precio.estado = 'Inactiva';
            } else {
                producto_lentes_precio.estado = 'Activa';
            }
        }
    }
});

export default Precio