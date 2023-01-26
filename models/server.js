const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config.js');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 8081;

        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';

        // Conectar a base de datos
        this.conectarDB()

        // Middlewares
        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    };

    async conectarDB(){
        await dbConection();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );

    };

    routes() {
        this.app.use( this.authPath, require('../routes/auth.js') );
        this.app.use( this.usuariosPath, require('../routes/usuarios.js') );
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}


module.exports = Server;
