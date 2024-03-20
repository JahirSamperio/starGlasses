import jwt from 'jsonwebtoken';

const generateId = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

const generarJWT = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })


export {
    generateId,
    generarJWT
}