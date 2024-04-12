import Precio from './Precio.js';
import Producto from './Producto.js';
import Usuario from './Usuario.js';
import Pedido from './Pedido.js';
import Prod_pedido from './Prod_pedido.js';

Producto.hasOne(Precio, {foreignKey: 'id_precio'});

Pedido.hasOne(Usuario, {foreignKey: 'id_usuario'});

Pedido.hasMany(Prod_pedido, {foreignKey: 'id_pedido'});

Prod_pedido.belongsTo(Pedido, {foreignKey: 'id_pedido'})

export {
    Producto,
    Precio,
    Usuario,
    Pedido,
    Prod_pedido
}