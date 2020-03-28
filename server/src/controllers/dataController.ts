import {Request, Response} from 'express';

import pool from '../database';

class DataController {
    public async listEsp(req: Request, res: Response): Promise<any> {
        await pool.query('select * from especialidad', (err, result) => {
            if (err) {
                throw err;
            } else {
                res.json(result);
            }
        });
    }

    public async consultEsp(req: Request, res: Response): Promise<any> {
        await pool.query('select detalle_especialidad from especialidad where cod_especialidad = ' + req.params.id, (err, result) => {
            if (err) {
                throw err;
            } else {
                if (!result.length) {
                    res.json({ message: 'La especialidad no existe, consulte con el administrador del sistema' });
                } else {
                    res.json(result);
                }
            }
        });
    }

    public async consultCodEsp(req: Request, res: Response): Promise<any> {
        await pool.query('select max(cod_prof) from profesional', (err, result) => {
            if (err) {
                throw err;
            } else {
                if (!result.length) {
                    res.json({ message: 'No se ha podido obtener el codigo del profesional, por favor consulte con el administrador del sistema.' });
                } else {
                    res.json(result);
                }
            }
        });
    }
}

export const dataController = new DataController();
export default dataController;
