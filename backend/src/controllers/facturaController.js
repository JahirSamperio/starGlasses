import Factura from '../models/Factura.js';
import PdfkitConstruct from 'pdfkit-construct';
import fs from 'fs';
import fecha_actual from '../helpers/fecha_actual.js';
import { generateIdFactura } from '../helpers/tokens.js';
import { Pago, Pedido, Usuario, Direccion, Prod_pedido, Producto, Precio } from '../models/asosiations.js'


const crearFactura = async (req, res) => {
    try {
        const { id_pedido } = req.params;

        //Informacion del cliente
        const cliente = await Pedido.findOne({
            include: [{
                model: Usuario,
                attributes: ['nombre', 'apellido_paterno', 'apellido_materno', 'telefono', 'email']
            },
            {
                model: Direccion,
                attributes: ['direccion']
            }],
            attributes: ['fecha_pedido'],
            where: { id_pedido }
        })

        //Desestructurando el usuario
        const { nombre, apellido_paterno, apellido_materno, telefono, email } = cliente.usuario.dataValues;

        //Desestructurando la direccion
        const { direccion } = cliente.usuario_direccion.dataValues

        //Buscar productos con el id del pedido        
        const prod = await Prod_pedido.findAll({
            include: {
                model: Producto,
                attributes: ['nombre'],
                include: {
                    model: Precio,
                    attributes: ['precio_venta']
                }

            },
            attributes: ['cantidad'],
            where: { id_pedido }
        })

        //Definir las variables del objeto
        let prod_pedido = []
        let quantity = 0;
        let descripcion;
        let price = 0;
        let sub = 0;

        let total = 0;

        //Crear el arreglo de objetos de acuerdo con los productos del pedido
        for (let i = 0; i < prod.length; i++) {
            quantity = prod[i].dataValues.cantidad
            descripcion = prod[i].dataValues.producto_lente.dataValues.nombre;
            price = prod[i].dataValues.producto_lente.dataValues.producto_lentes_precio.dataValues.precio_venta;
            sub = quantity * price;
            prod_pedido[i] = {
                cantidad: quantity,
                descripcion: descripcion,
                precio: price,
                subtotal: sub
            }
            total = total + sub;
        }

        //Crea la estructura del documento
        const doc = new PdfkitConstruct({
            bufferPages: true
        });

        //Funcion de fecha
        const fecha = fecha_actual.toISOString().split('T')[0];

        //Inicia la descarga a la hora de dar click
        const stream = res.writeHead(200, {     //Definiendo la descarga del pdf con un estado 200 en lugar de .status(200)
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=factura.pdf"
        })

        doc.on('data', (data) => { stream.write(data) })
        doc.on('end', () => { stream.end() })

        const imagePath = 'backend/public/logo.png'; // Especifica la ruta de tu imagen aquí
        const image = fs.readFileSync(imagePath);

        const firmaPath = 'backend/public/firma.png'; // Especifica la ruta de tu imagen aquí
        const firma = fs.readFileSync(firmaPath);


        // Colocar la imagen en la esquina superior izquierda
        doc.image(image, {
            x: 50, // Coordenada X
            y: 30, // Coordenada Y
            width: 170, // Ancho de la imagen
            height: 110 // Altura de la imagen
        });

        // Función para obtener las coordenadas de la esquina inferior derecha
        function coordenadasEsquinaInferiorDerecha(anchoImagen, altoImagen) {
            const margenDerecho = 50; // Margen derecho deseado
            const margenSuperior  = 50; // Margen inferior deseado
            const coordenadaX = doc.page.width - anchoImagen - margenDerecho;
            const coordenadaY = doc.page.width - anchoImagen - margenSuperior + 200;
            return { x: coordenadaX, y: coordenadaY };
        }

        // Llama a la función para obtener las coordenadas
        const coordenadas = coordenadasEsquinaInferiorDerecha(170, 110);

        // Coloca la imagen en la esquina inferior derecha
        doc.image(firma, {
            x: coordenadas.x,
            y: coordenadas.y,
            width: 100,
            height: 60
        });

        // set the header to render in every page
        doc.setDocumentHeader({
            height: '35'
        }, () => {
            doc.lineGap(5); // Se establece un interlineado de 5 puntos

            doc.fontSize(20).text('Factura de venta ', {
                width: 420,
                align: 'right',
                bold: true
            })
            doc.fontSize(12).text(`Factura: ${generateIdFactura()}`, {
                width: 420,
                align: 'right',
                bold: true
            })
            doc.fontSize(12).text(`Fecha de emisión: ${fecha}`, {
                width: 420,
                align: 'right',
                bold: true
            })


            // Mover hacia abajo para crear espacio entre los bloques de texto
            doc.moveDown();


            // Información del vendedor
            doc.fontSize(15)
                .text('Información del cliente', {
                    width: 420,
                    align: 'left'
                })

            // Mover hacia abajo para crear espacio entre los bloques de texto
            doc.moveDown();

            doc.fontSize(12)
                .text(`Nombre: ${nombre} ${apellido_paterno} ${apellido_materno}`, {
                    width: 420,
                    align: 'left'
                })
                .text(`Número: ${telefono}`, {
                    width: 420,
                    align: 'left'
                })
                .text(`Dirección: ${direccion}`, {
                    width: 420,
                    align: 'left'
                })
                .text(`Email: ${email}`, {
                    width: 420,
                    align: 'left'
                })
        });

        // set the footer to render in every page
        doc.setDocumentFooter({
            height: '15'
        }, () => {

            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.moveDown();


            doc.fontSize(15)
                .text(`Subtotal: ${total}`, {
                    width: 420,
                    align: 'right'
                })

            doc.fontSize(15)
                .text(`Total: ${total}`, {
                    width: 420,
                    align: 'right'
                })

            // Información del Pago
            doc.fontSize(15)
                .text('Información del pago', {
                    width: 420,
                    align: 'left'
                })

            // Mover hacia abajo para crear espacio entre los bloques de texto
            doc.moveDown();

            doc.fontSize(12)
                .text(`Método de pago: Tarjeta de débito`, {
                    width: 420,
                    align: 'left'
                })
                .text(`Fecha de pago: ${cliente.fecha_pedido}`, {
                    width: 420,
                    align: 'left'
                })



            // Información del vendedor
            doc.fontSize(10)
                .text('Tlahuelilpan Centro, 123        |        Contacto: 123-456-7890        |        ventas@starglasses.com', doc.footer.x + 70, doc.footer.y + 15, {
                    // width: 420,
                    align: 'left'
                })
        });



        const productos = [
            {
                cantidad: 1,
                descripcion: "Lentes",
                precio: 24.55,
                subtotal: 355
            }
        ]
        // Detalles de la factura
        doc.addTable(
            [
                { key: 'cantidad', label: 'Cantidad', align: 'center' },
                { key: 'descripcion', label: 'Producto', align: 'left' },
                { key: 'precio', label: 'Precio', align: 'center' },
                { key: 'subtotal', label: 'Subtotal', align: 'center' }
            ], prod_pedido, {
            border: null,
            width: "fill_body",
            striped: true,
            stripedColors: ["#f6f6f6", "#d6c4dd"],
            cellsPadding: 10,
            marginLeft: 45,
            marginRight: 45,
            headAlign: 'center'
        });


        // render tables
        doc.render();
        doc.end();



    } catch (error) {
        console.log(error);
        return res.json(500, {
            error: "Error en el servidor"
        })
    }
}

export {
    crearFactura
}