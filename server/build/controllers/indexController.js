"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ message: 'Conexión establecida.' });
    }
}
exports.indexController = new IndexController();
