import { FastifyInstance, FastifyPluginOptions, FastifyReply } from "fastify";

import { FetchOneLightUseCase } from "../../usecases/light/fetch-one-light.usecase";
import { UpdateAutoLightUsecase } from "../../usecases/light/update-auto-light.usecase";
import { UpdateBrightnessLightUsecase } from "../../usecases/light/update-brigthness-light.usecase";
import { UpdateColorLightUsecase } from "../../usecases/light/update-color-light.usecase copy";
import { UpdateMusicLightUsecase } from "../../usecases/light/update-music-light.usecase";
import { UpdatePowerOnLightUsecase } from "../../usecases/light/update-power-on-light.usecase";
import { LightAdapter } from "../adapters/light.adapter";
import {
  FetchOneRequest,
  TestRequest,
  UpdateAutoRequest,
  UpdateBrightnessRequest,
  UpdateColorRequest,
  UpdateMusicRequest,
  UpdatePowerOnRequest,
} from "./light.types";

class LightController {
  fetchOneLightUseCase: FetchOneLightUseCase;
  updatePowerOnLightUsecase: UpdatePowerOnLightUsecase;
  updateColorLightUsecase: UpdateColorLightUsecase;
  updateBrightnessLightUsecase: UpdateBrightnessLightUsecase;
  updateAutoLightUsecase: UpdateAutoLightUsecase;
  updateMusicLightUsecase: UpdateMusicLightUsecase;

  constructor() {
    this.fetchOneLightUseCase = new FetchOneLightUseCase(new LightAdapter());
    this.updatePowerOnLightUsecase = new UpdatePowerOnLightUsecase(
      new LightAdapter()
    );
    this.updateColorLightUsecase = new UpdateColorLightUsecase(
      new LightAdapter()
    );
    this.updateBrightnessLightUsecase = new UpdateBrightnessLightUsecase(
      new LightAdapter()
    );
    this.updateAutoLightUsecase = new UpdateAutoLightUsecase(
      new LightAdapter()
    );
    this.updateMusicLightUsecase = new UpdateMusicLightUsecase(
      new LightAdapter()
    );
  }

  router(server: FastifyInstance, opts: FastifyPluginOptions, done: any) {
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

    server.get(
      "/lights/:id",
      async (request: FetchOneRequest, reply: FastifyReply) => {
        const light = await this.fetchOneLightUseCase.execute(
          request.params.id
        );
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/powerOn",
      async (request: UpdatePowerOnRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const powerOn = request.body.powerOn;
        if (!id || powerOn === undefined)
          return reply.code(400).send("Error: Arguments incorrects");
        const light = await this.updatePowerOnLightUsecase.execute(id, powerOn);
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/color",
      async (request: UpdateColorRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const color = request.body.color;
        if (!id || !color)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateColorLightUsecase.execute(id, color);
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/brightness",
      async (request: UpdateBrightnessRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const brightness = request.body.brightness;
        if (!id || !brightness)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateBrightnessLightUsecase.execute(
          id,
          brightness
        );
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/auto",
      async (request: UpdateAutoRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const auto = request.body.auto;
        if (!id || auto === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateAutoLightUsecase.execute(id, auto);
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/music",
      async (request: UpdateMusicRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const music = request.body.music;
        if (!id || music === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateMusicLightUsecase.execute(id, music);
        reply.code(200).send(light);
      }
    );

    done();
  }
}
export { LightController };
