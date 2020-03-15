"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const arfamedController_1 = __importDefault(require("../controllers/arfamedController"));
class ArfamedRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', arfamedController_1.default.index);
    }
}
const arfamedRoutes = new ArfamedRoutes();
exports.default = arfamedRoutes.router;
