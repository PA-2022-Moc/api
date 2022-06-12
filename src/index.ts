import { fastify } from "fastify";
import dotenv from "dotenv";

import { router } from "./router";

//get env variables
dotenv.config();

//server config
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = fastify({
  logger: true,
});

server.register(router, { prefix: "/api" });
const start = () => {
  server
    .listen(port, address)
    .then(async (addr) =>
      console.log(`Server started successfully\nListening on ${addr}`)
    )
    .catch((err) => {
      server.log.error(err);
      process.exit(1);
    });
};
start();
