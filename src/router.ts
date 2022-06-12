import { FastifyInstance } from "fastify";

import { LightController } from "./infrastructure/controller/light.controller";

function router(fastify: FastifyInstance, opt: any, next: Function) {
  const lightRoutes = new LightController();

  lightRoutes.router(fastify, opt, next);
}

export { router };
