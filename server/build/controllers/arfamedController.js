"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ArfamedController {
    index(req, res) {
        database_1.default.query('DESCRIBE previsiones');
        res.json('Arfamed desde arfamedController');
        // res.send('Enviado desde clase IndexController hacia indexRoutes.ts');
    }
}
exports.arfamedController = new ArfamedController();
exports.default = exports.arfamedController;
