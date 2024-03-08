import mysql2 from 'mysql2';
import {config} from 'dotenv';
// Ejecuta la función config() para cargar las variables de entorno desde el archivo .env
config();

const conexion = mysql2.createConnection({
    host: process.env.BD_HOST,
    database: process.env.BD_DATABASE,
    user:process.env.BD_USER,
    password: process.env.BD_PASSWORD
});

const dbConnection = () => {
    conexion.connect(function (err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }
        console.log('Conectado con el identificador ' + conexion.threadId);
    });
}

export {
    conexion, 
    dbConnection
};