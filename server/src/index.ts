import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import arfamedRoutes from './routes/arfamedRoutes';

class Server {

  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 1332);
    this.app.use(morgan('combined'));
    this.app.use(cors());
    this.app.use(express.json()); // bodyparser incluido en express
    this.app.use(express.urlencoded({extended: false}));
  }

  routes(): void {
    this.app.use('/', indexRoutes);
    this.app.use('/api/arfamed', arfamedRoutes);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port: `, this.app.get('port'));
    });
  }
}

const server = new Server();
server.start();
