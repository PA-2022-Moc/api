import { fastify } from "fastify";
import dotenv from "dotenv";

import { router } from "./router";
import { clientMqtt, espMacAddress } from "./infrastructure/config/mosquitto";

// //server config
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = fastify({
  logger: true,
});

server.register(router, { prefix: "/api" });
const start = () => {
  server
    .listen(port, address)
    .then(async (addr) => {
      console.log(`Server started successfully\nListening on ${addr}`);

      clientMqtt.on("connect", function () {
        clientMqtt.subscribe("light-state");
      });
    })
    .catch((err) => {
      server.log.error(err);
      clientMqtt.end();
      process.exit(1);
    });
};
start();
