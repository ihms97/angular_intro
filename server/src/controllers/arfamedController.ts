import {Request, Response} from 'express';

import pool from '../database';

class ArfamedController {
  public async consult (req: Request, res: Response): Promise<any> {
    await pool.query('select * from profesional where cod_prof = ' + req.params.id, (err, result) => {
      if (err) {
        throw err;
      } else {
        if (!result.length) {
          res.json({message: 'No existe el usuario solicitado'});
        } else {
          res.json(result);
        }
      }
    });
  }

  public async listgroup (req: Request, res: Response): Promise<any> {
    pool.query('select cod_prof,nombre_prof,apellido_prof,celular_prof,correo_prof,detalle_especialidad from profesional pf left JOIN especialidad es on pf.cod_prof = es.cod_especialidad', (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    });
  }  

  public async list (req: Request, res: Response): Promise<any> {
    await pool.query('select * from profesional', (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    });
  }

  public async create (req: Request, res: Response): Promise<any> {
    await pool.query('insert into profesional set ?', [req.body], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({message: 'Profesional Guardado Satisfactoriamente'});
      }
    });
  }

  public async delete (req: Request, res: Response): Promise<any> {
    await pool.query('delete from profesional where cod_prof = ' + req.params.id, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json('Profesional eliminado correctamente.');
      }
    });
  }

  public async update (req: Request, res: Response): Promise<void> {
    await pool.query('update profesional set ? where cod_prof = ?', [req.body, req.params.id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({ message: "El Profesional a sido actualizado con exito" });
      }
    });
  }
}

export const arfamedController = new ArfamedController();
export default arfamedController;
