import express from 'express';
import { createServer, Server } from 'http';
import colors from 'colors';
import { NodeRoutes } from './routes/node.routes';
import { DatabaseConnection } from './database/connection';

export class AppServer {

    private readonly PORT: number = 5000;
    private readonly API_BASE_URL: string = '/api';

    private server: Server;

    private app: express.Application;

    constructor() {
        this.initServer();
        this.connectDB();
    }

    private async initServer() {
        const cors = require('cors');
        this.app = express();

        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.urlencoded());

        this.server = createServer(this.app);
        await this.addRoutes();
    }

    private async connectDB() {
        const dbConnection: DatabaseConnection = new DatabaseConnection();
        await dbConnection.testConnection();
    }


    private async addRoutes() {

        this.app.get('/', (req, res) => {
            res.send({
                message: `Welcome to MovieMania!   
                    Base URL: ${this.API_BASE_URL}  
                    HTTP PORT : ${this.PORT}`
            });
        });

        this.app.get(this.API_BASE_URL + '/welcome', (req, res) => {
            res.send({
                message: `Welcome to MovieMania!   
                    Base URL: ${this.API_BASE_URL}  
                    HTTP PORT : ${this.PORT}`
            });
        });


        const nodeRoutes: NodeRoutes = new NodeRoutes();
        nodeRoutes.initNodeRoutes(this.app, this.API_BASE_URL);

        this.listen();
    }


    private listen(): void {

        this.server.listen(this.PORT, () => {
            console.log(colors.green(`MovieMania - SVR: Running server on port ${this.PORT}`));
            console.log(colors.green(`MovieMania - SVR: Base URL - ${this.API_BASE_URL}`));
        });

    }

    public getApp() {
        return this.app;
    }

}