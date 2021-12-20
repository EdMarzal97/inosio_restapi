import express, {Application} from 'express';
import morgan from 'morgan';

//ROUTES

import IndexRouter from './routes/index.routes'



export class App{

    private app: Application;

    constructor(private port?: number | string ) {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    middleware(){
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(IndexRouter);
    }


    async listen() {
           await this.app.listen(this.app.get('port'));
           console.log('Server on port', this.app.get('port'));
    }
}