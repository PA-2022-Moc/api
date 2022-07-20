import { FastifyInstance, FastifyPluginOptions, FastifyReply } from "fastify";

import { FetchOneLightUseCase } from "../../usecases/light/fetch-one-light.usecase";
import { UpdateAutoBrightnessLightUsecase } from "../../usecases/light/update-auto-brightness-light.usecase";
import { UpdateBrightnessLightUsecase } from "../../usecases/light/update-brigthness-light.usecase";
import { UpdateColorLightUsecase } from "../../usecases/light/update-color-light.usecase";
import { UpdateRandomModeLightUsecase } from "../../usecases/light/update-random-mode-light.usecase";
import { UpdatePowerOnLightUsecase } from "../../usecases/light/update-power-on-light.usecase";
import { LightAdapter } from "../adapters/light.adapter";
import {
  FetchOneRequest,
  TestRequest,
  UpdateAutoBrightnessRequest,
  UpdateBrightnessRequest,
  UpdateColorRequest,
  UpdateRandomModeRequest,
  UpdatePowerOnRequest,
  UpdatePartyModeRequest,
} from "./light.types";
import { MQTTAdapter } from "../adapters/mqtt.adapter";
import { UpdatePartyModeLightUsecase } from "../../usecases/light/update-party-mode-light.usecase";

class LightController {
  fetchOneLightUseCase: FetchOneLightUseCase;
  updatePowerOnLightUsecase: UpdatePowerOnLightUsecase;
  updateColorLightUsecase: UpdateColorLightUsecase;
  updateBrightnessLightUsecase: UpdateBrightnessLightUsecase;
  updateAutoBrightnessLightUsecase: UpdateAutoBrightnessLightUsecase;
  updateRandomModeLightUsecase: UpdateRandomModeLightUsecase;
  updatePartyModeLightUsecase: UpdatePartyModeLightUsecase;

  constructor() {
    this.fetchOneLightUseCase = new FetchOneLightUseCase(
      new LightAdapter(),
      new MQTTAdapter()
    );
    this.updatePowerOnLightUsecase = new UpdatePowerOnLightUsecase(
      new LightAdapter(),
      new MQTTAdapter()
    );
    this.updateColorLightUsecase = new UpdateColorLightUsecase(
      new LightAdapter(),
      new MQTTAdapter()
    );
    this.updateBrightnessLightUsecase = new UpdateBrightnessLightUsecase(
      new LightAdapter(),
      new MQTTAdapter()
    );
    this.updateAutoBrightnessLightUsecase =
      new UpdateAutoBrightnessLightUsecase(
        new LightAdapter(),
        new MQTTAdapter()
      );
    this.updateRandomModeLightUsecase = new UpdateRandomModeLightUsecase(
      new LightAdapter(),
      new MQTTAdapter()
    );
    this.updatePartyModeLightUsecase = new UpdatePartyModeLightUsecase(
      new LightAdapter(),
      new MQTTAdapter()
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
        if (!id || brightness === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateBrightnessLightUsecase.execute(
          id,
          brightness
        );
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/autoBrightness",
      async (request: UpdateAutoBrightnessRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const autoBrightness = request.body.autoBrightness;
        if (!id || autoBrightness === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateAutoBrightnessLightUsecase.execute(
          id,
          autoBrightness
        );
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/randomMode",
      async (request: UpdateRandomModeRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const randomMode = request.body.randomMode;
        if (!id || randomMode === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updateRandomModeLightUsecase.execute(
          id,
          randomMode
        );
        reply.code(200).send(light);
      }
    );

    server.put(
      "/lights/:id/partyMode",
      async (request: UpdatePartyModeRequest, reply: FastifyReply) => {
        const id = request.params.id;
        const partyMode = request.body.partyMode;
        if (!id || partyMode === undefined)
          return reply.code(400).send("Error: Arguments incorrects");

        const light = await this.updatePartyModeLightUsecase.execute(
          id,
          partyMode
        );
        reply.code(200).send(light);
      }
    );

    done();
  }
}
export { LightController };
