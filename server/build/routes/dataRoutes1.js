"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = __importDefault(require("../controllers/dataController"));
class DataRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dataController_1.default.listEsp);
        this.router.get('/:id', dataController_1.default.consultEsp);
    }
}
const dataRoutes = new DataRoutes();
exports.default = dataRoutes.router;
