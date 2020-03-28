import { Router } from 'express';
import dataController from '../controllers/dataController';

class DataRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', dataController.listEsp);
    this.router.get('/:id', dataController.consultEsp);
    this.router.get('/cod/consult', dataController.consultCodEsp);
  }
}

const dataRoutes = new DataRoutes();
export default dataRoutes.router;
