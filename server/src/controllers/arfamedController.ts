import {Request, Response} from 'express';

import pool from '../database';

class ArfamedController {
  public index (req: Request, res: Response) {
    pool.query('DESCRIBE previsiones');
    res.json('Arfamed desde arfamedController');
    // res.send('Enviado desde clase IndexController hacia indexRoutes.ts');
  }
}

export const arfamedController = new ArfamedController();
export default arfamedController;
