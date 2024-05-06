import PDFDocument from 'pdfkit';
import PdfkitConstruct from 'pdfkit-construct';

const buildPDF = (dataCallBack, endCallBack) => {
    const doc = new PdfkitConstruct({

        bufferPages: true
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
} 

export default buildPDF;