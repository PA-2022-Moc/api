import { FastifyInstance, FastifyPluginOptions, FastifyReply } from "fastify";

import { FetchOneLightUseCase } from "../../usecases/light/fetch-one-light.usecase";
import { LightAdapter } from "../adapters/light.adapter";
import { FetchOneRequest, TestRequest } from "./light.types";

class LightController {
  fetchOneLightUseCase: FetchOneLightUseCase;

  constructor() {
    this.fetchOneLightUseCase = new FetchOneLightUseCase(new LightAdapter());
  }

  router(server: FastifyInstance, opts: FastifyPluginOptions, done: any) {
    server.get(
      "/light/:id",
      async (request: FetchOneRequest, reply: FastifyReply) => {
        const light = await this.fetchOneLightUseCase.execute(
          request.params.id
        );
        reply.code(200).send(light);
      }
    );

    server.get(
      "/test",
      {
        preValidation: (request: TestRequest, reply: FastifyReply, done) => {
          const { username, password } = request.query;

          done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
        },
      },
      async (request, reply) => {
        const customerHeader = request.headers["h-Custom"];
        // do something with request data
        return `logged in!`;
      }
    );

    done();
  }
}
export { LightController };
