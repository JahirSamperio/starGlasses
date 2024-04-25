import conexion from '../db/conexion.js'


function prodMasVendido() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT 
            prod_pedido.id_lentes, 
            SUM(prod_pedido.cantidad) AS 'Total_de_productos', 
            producto_lentes.nombre, 
            producto_lentes_precio.precio_venta, 
            producto_lentes_precio.precio_compra
        FROM 
            prod_pedido AS prod_pedido
        LEFT OUTER JOIN 
            producto_lentes AS producto_lentes ON prod_pedido.id_lentes = producto_lentes.id_lentes
        LEFT OUTER JOIN 
            producto_lentes_precio AS producto_lentes_precio ON producto_lentes.id_precio = producto_lentes_precio.id_precio
        GROUP BY 
            prod_pedido.id_lentes
        ORDER BY 
            Total_de_productos DESC;`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })  
    })
}

export default prodMasVendido;