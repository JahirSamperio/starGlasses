import Precio from './Precio.js';
import Producto from './Producto.js';
import Usuario from './Usuario.js';
import Pedido from './Pedido.js';
import Prod_pedido from './Prod_pedido.js';
import Envio from './Envio.js';
import Direccion from './Direccion.js';
import Pago from './Pago.js';
import Cita from './Cita.js';

//Productos
Producto.hasOne(Precio, {foreignKey: 'id_precio'});

Pedido.hasMany(Prod_pedido, {foreignKey: 'id_pedido'});

Prod_pedido.belongsTo(Pedido, {foreignKey: 'id_pedido'})

//Pedidos
Pedido.hasOne(Usuario, {foreignKey: 'id_usuario'});

Pedido.hasOne(Direccion, {foreignKey: 'id_direccion'});

//Envios
Envio.hasOne(Pedido, {foreignKey: 'id_pedido'})

//Direccion
Direccion.hasOne(Usuario, {foreignKey: 'id_usuario'})

Direccion.belongsTo(Pedido, {foreignKey: 'id_direccion'});

//Pagos
Pago.belongsTo(Usuario, {foreignKey: 'id_usuario'});

Pago.belongsTo(Pedido, {foreignKey: 'id_pedido'})


//Cita
Cita.hasOne(Usuario, {foreignKey: 'id_usuario'})


export {
    Producto,
    Precio,
    Usuario,
    Pedido,
    Prod_pedido,
    Envio,
    Direccion,
    Pago,
    Cita
}