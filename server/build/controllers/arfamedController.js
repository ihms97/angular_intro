"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ArfamedController {
    consult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select * from profesional where cod_prof = ' + req.params.id, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    if (!result.length) {
                        res.json({ message: 'No existe el usuario solicitado' });
                    }
                    else {
                        res.json(result);
                    }
                }
            });
        });
    }
    listgroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('select cod_prof, nombre_prof, apellido_prof, celular_prof, correo_prof, detalle_especialidad from profesional P inner join especialidad E on P.cod_especialidad = E.cod_especialidad', (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select * from profesional', (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into profesional set ?', [req.body], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json({ message: 'Profesional Guardado Satisfactoriamente' });
                }
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('delete from profesional where cod_prof = ' + req.params.id, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json('Profesional eliminado correctamente.');
                }
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('update profesional set ? where cod_prof = ?', [req.body, req.params.id], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json({ message: "El Profesional a sido actualizado con exito" });
                }
            });
        });
    }
}
exports.arfamedController = new ArfamedController();
exports.default = exports.arfamedController;
