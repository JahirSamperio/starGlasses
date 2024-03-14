import Sequelize from 'sequelize';
import {config} from 'dotenv';
// Ejecuta la función config() para cargar las variables de entorno desde el archivo .env
config();

const conexion = new Sequelize(process.env.BD_DATABASE, process.env.BD_USER, process.env.BD_PASSWORD, {
    host: process.env.BD_HOST,
    port: process.env.BD_DB_PORT,
    dialect: 'mysql',
    define:{
        timestamps: true,
        freezeTableName: true
    },
    pool: {
        max: 5, //Maximo de conexxiones
        min: 0, //Minimo de conexxiones
        acquire: 30000, //Tiempo antes de marxar un aerror 30 seconds
        idle: 10000  //Finaliza la conexion despues de 10 seconds
    },
    operatorAliases: false
});

export default conexion;