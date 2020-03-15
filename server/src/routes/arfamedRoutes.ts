import { Router } from 'express';

import arfamedController from '../controllers/arfamedController';

class ArfamedRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', arfamedController.index);
  }
}

const arfamedRoutes = new ArfamedRoutes();
export default arfamedRoutes.router;
