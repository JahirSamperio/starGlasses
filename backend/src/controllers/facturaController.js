import Factura from '../models/Factura.js';
import buildPDF from '../helpers/crearFactura.js';
import PdfkitConstruct from 'pdfkit-construct';


const crearFactura = async (req, res) => {
    try {
        const doc = new PdfkitConstruct({
            bufferPages: true
        });

        const stream = res.writeHead(200, {     //Definiendo la descarga del pdf con un estado 200 en lugar de .status(200)
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=factura.pdf"
        })

        // set the header to render in every page
        doc.setDocumentHeader({}, () => {


            doc.lineJoin('miter')
                .rect(0, 0, doc.page.width, doc.header.options.heightNumber).fill("#ededed");

            doc.fill("#115dc8")
                .fontSize(20)
                .text("Hello world header", doc.header.x, doc.header.y);
        });

        const productos = [
            {
                no: 1,
                descripcion: "Lentes",
                price: 24.55,
                quantity: 2,
                subtotal: 355
            }
        ]
        // Detalles de la factura
        doc.addTable(
            [
                { key: 'no', label: 'No', align: 'left' },
                { key: 'descripcion', label: 'Descripcion', align: 'left' },
                { key: 'price', label: 'Price', align: 'right' },
                { key: 'quantity', label: 'Quantity' },
                { key: 'subtotal', label: 'Subtotal', align: 'right' }
            ], productos, {
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