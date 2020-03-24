import {Request, Response} from 'express';

class IndexController {
  public index (req: Request, res: Response) {
    res.json({message: 'Conexión establecida.'});
  }
}

export const indexController = new IndexController();
