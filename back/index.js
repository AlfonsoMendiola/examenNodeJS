import express from 'express';
import cors from 'cors';
import { MssqlConnection } from './database/config.mjs';
import { notFoundRouter } from './api/notFound/notFound-router.mjs';
import { publicacionesRouter } from './api/publicaciones/publicaciones-router.mjs';

class Servidor{
    constructor(){
        this.app = express();
        this.conectarsql();
        this.middlewares();
        this.routes();
        
    }

    async conectarsql(){ await MssqlConnection(); }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended: true}) );
        this.app.use( express.static('public/dist') );
    }

    routes(){
        this.app.use('/api/publicaciones', publicacionesRouter);
        
        this.app.use('/', notFoundRouter);
    }

    listen(){
        this.app.listen( process.env.APP_PORT, () => {
            console.log(`Corriendo en el puerto ${process.env.APP_PORT}`);
        } )
    }
}



const servidor = new Servidor();
servidor.listen();