import express from 'express';
import routes from '../routes/routes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        //this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }
    // middlewares() {
        
    // }

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