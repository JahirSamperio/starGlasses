import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

//Configurando cloudinary
cloudinary.config(process.env.CLOUDINARY_URL);

const uploadCloudinary = async (req) =>{
    //Cargar imagen a cloudinary y extraer url
    try {
        const {imagen} = req.files

        let images = '';

            for(let i = 0; i<imagen.length; i++){
                // Subir el archivo a Cloudinary y obtener la URL segura
                const {secure_url} = await cloudinary.uploader.upload(
                    imagen[i].tempFilePath, { 
                        resource_type: "auto"
                    });
                images = images + secure_url + ',';
                    //Retorna la URL en un string
                }
            return images;

    } catch (error) {
        console.error('Error al cargar la imagen a Cloudinary:', error);
        throw new Error('Error al cargar la imagen a Cloudinary');
    }
}

export default uploadCloudinary;