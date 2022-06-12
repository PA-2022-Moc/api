"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const light_controller_1 = require("./infrastructure/controller/light.controller");
function router(fastify, opt, next) {
    const lightRoutes = new light_controller_1.LightController();
    lightRoutes.router(fastify, opt, next);
}
exports.router = router;
