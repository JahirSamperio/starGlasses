import jwt from 'jsonwebtoken';

const generateId = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

const generateIdFactura = () => {
    const length = 8; // Longitud del ID de factura
    let id = ''; // Inicializamos el ID como una cadena vacía

    // Generamos una cadena de números aleatorios
    for (let i = 0; i < length; i++) {
        id += Math.floor(Math.random() * 10); // Agregamos un número aleatorio del 0 al 9 a la cadena
    }

    return id; // Devolvemos el ID generado
};

const generarJWT = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })


export {
    generateId,
    generarJWT,
    generateIdFactura
}