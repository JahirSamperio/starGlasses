import {DataTypes} from 'sequelize'
import bcrypt from 'bcrypt';
import conexion from '../db/conexion.js'

const Usuario = conexion.define('usuario', {
    id_usuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
    id_customer_stripe: DataTypes.STRING
}, {
    hooks: {
        beforeCreate: async function(usuario){
            const salt = await bcrypt.genSalt(10)
            usuario.password = await bcrypt.hash(usuario.password, salt)
        }
    }
})

//Metodos personalizados
Usuario.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password, this.password); //pssword es la constante que envio el usuario y this.password es desde la base de datos a comparar
}

export default Usuario;