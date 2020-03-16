import { Router } from 'express';

import arfamedController from '../controllers/arfamedController';

class ArfamedRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', arfamedController.list);
    this.router.get('/:id', arfamedController.consult);
    this.router.post('/', arfamedController.create);
    this.router.delete('/:id', arfamedController.delete);
    this.router.put('/:id', arfamedController.update);
  }
}

const arfamedRoutes = new ArfamedRoutes();
export default arfamedRoutes.router;
