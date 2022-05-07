import { FastifyInstance } from "fastify";
import { LightController } from "./controller/light";


function router(fastify: FastifyInstance, opt: any, next: Function) {
  const authRoutes = LightController(fastify, opt);

  // authRoutes.router(fastify, opt, next);
}

export { router };
