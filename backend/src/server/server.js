import express from 'express';
import routes from '../routes/routes.js';
import cors from 'cors';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import conexion from '../db/conexion.js';
import multer from 'multer'; // Importa multer
import fileUpload from 'express-fileupload';
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //conectar base de datos
        this.conectarBD();

        //Middlewares
        this.middlewares();
        
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarBD(){
        try {
            await conexion.authenticate();
            // conexion.sync();
            console.log('Base de datos en linea');
        } catch(error){
            throw new Error(error);
        }
    }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Habilitar cookie parser
        this.app.use(cookieParser());

        // Habilitar multer para manejar archivos en formato multipart/form-data
        //const upload = multer();

        // Middleware de multer para procesar la carga de archivos
        //this.app.use(upload.any());
        
        //Habilitar CSRF
        //this.app.use(csrf({cookie: true}));

        //carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        })); 
    }

    routes() {
        this.app.use(routes);
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto',this.port );
        })
    }
}

export default Server;