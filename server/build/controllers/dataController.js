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
class DataController {
    listEsp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select * from especialidad', (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.json(result);
                }
            });
        });
    }
    consultEsp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select detalle_especialidad from especialidad where cod_especialidad = ' + req.params.id, (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    if (!result.length) {
                        res.json({ message: 'La especialidad no existe, consulte con el administrador del sistema' });
                    }
                    else {
                        res.json(result);
                    }
                }
            });
        });
    }
}
exports.dataController = new DataController();
exports.default = exports.dataController;
