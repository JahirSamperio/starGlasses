import {conexion} from '../db/conexion.js';

//Inicio de sesion
function login(email, password){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM usuario u
            WHERE u.email = '${email}'
            AND u.password = '${password}'`, function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            }
        )
    })
}

export default login;