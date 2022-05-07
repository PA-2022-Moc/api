"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const light_1 = require("./controller/light");
function router(fastify, opt, next) {
    const authRoutes = (0, light_1.LightController)(fastify, opt);
    // authRoutes.router(fastify, opt, next);
}
exports.router = router;
