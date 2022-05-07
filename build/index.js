"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const light_1 = require("./controller/light");
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = (0, fastify_1.fastify)({
    logger: true
});
server.register(light_1.LightController, { prefix: '/api' });
const start = () => {
    server.listen(port, address).then((addr) => console.log(`Server started successfully\nListening on ${addr}`)).catch(err => {
        server.log.error(err);
        process.exit(1);
    });
};
start();
