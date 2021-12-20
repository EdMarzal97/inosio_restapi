import express, {Application} from 'express';

const app = express();

export class App{

    private app: Application;

    constructor() {
        this.app = express();
    }

    async listen() {
           await this.app.listen(5000);
           console.log('Server on port', 5000);
    }
}