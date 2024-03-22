import Precio from './Precio.js';
import Producto from './Producto.js';
import Usuario from './Usuario.js';

Producto.hasOne(Precio, {foreignKey: 'id_precio'});


export {
    Producto,
    Precio,
    Usuario
}