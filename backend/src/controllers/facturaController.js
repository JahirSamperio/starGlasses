import Factura from '../models/Factura.js';
import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'
import { Sequelize, Op } from 'sequelize'
import uploadCloudinary from '../uploads/uploads.js';
import pdf from 'html-pdf'
import tmp from 'tmp'

//Configurando cloudinary
cloudinary.config(process.env.CLOUDINARY_URL);

// const crearFactura = async (req, res) => {
//     try {
//         // Crear un archivo temporal para el PDF
//         tmp.file((err, tempFilePath, fd, cleanupCallback) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             // Generar el PDF utilizando html-pdf y los datos recibidos en la solicitud
//             const options = { format: 'Letter' };
//             const contenidoHTML = '<h1>¡Hola, mundo!</h1>';
//             pdf.create(contenidoHTML, options).toFile(tempFilePath, async (err, res) => {
//                 if (err) {
//                     console.error(err);
//                     cleanupCallback(); // Limpia el archivo temporal en caso de error
//                     return;
//                 }
//             })
//         })
//         try {
//             const result = await cloudinary.uploader.upload(tempFilePath, { resource_type: 'raw' });
//             console.log('PDF cargado a Cloudinary:', result.secure_url);
//             cleanupCallback(); // Limpia el archivo temporal después de cargarlo a Cloudinary
//           } catch (error) {
//             console.error('Error al cargar el PDF a Cloudinary:', error);
//             cleanupCallback(); // Limpia el archivo temporal en caso de error
//           }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             error: "Error en el servidor"
//         })
//     }
// }

export {
    crearFactura
}