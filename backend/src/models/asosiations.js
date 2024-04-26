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
Producto.belongsTo(Precio, {foreignKey: 'id_precio'});

Precio.hasOne(Producto, {foreignKey: 'id_precio'});


Pedido.hasMany(Prod_pedido, {foreignKey: 'id_pedido'});

Prod_pedido.belongsTo(Pedido, {foreignKey: 'id_pedido'});

Prod_pedido.belongsTo(Producto, {foreignKey: 'id_lentes'});

Producto.hasMany(Prod_pedido, {foreignKey: 'id_lentes'});


//Pedidos
Pedido.belongsTo(Usuario, {foreignKey: 'id_usuario'});

Pedido.belongsTo(Direccion, {foreignKey: 'id_direccion'});

//Envios
Envio.hasOne(Pedido, {foreignKey: 'id_pedido'})

//Direccion
Direccion.belongsTo(Usuario, {foreignKey: 'id_usuario'})

Direccion.hasOne(Pedido, {foreignKey: 'id_direccion'});

//Pagos
Pago.belongsTo(Usuario, {foreignKey: 'id_usuario'});

Pago.belongsTo(Pedido, {foreignKey: 'id_pedido'})


//Cita
Cita.belongsTo(Usuario, {foreignKey: 'id_usuario'})

Usuario.hasMany(Cita, {foreignKey: 'id_usuario'})


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