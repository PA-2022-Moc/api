"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightController = void 0;
const fetch_one_light_usecase_1 = require("../../usecases/light/fetch-one-light.usecase");
const update_auto_light_usecase_1 = require("../../usecases/light/update-auto-light.usecase");
const update_brigthness_light_usecase_1 = require("../../usecases/light/update-brigthness-light.usecase");
const update_color_light_usecase_copy_1 = require("../../usecases/light/update-color-light.usecase copy");
const update_music_light_usecase_1 = require("../../usecases/light/update-music-light.usecase");
const update_power_on_light_usecase_1 = require("../../usecases/light/update-power-on-light.usecase");
const light_adapter_1 = require("../adapters/light.adapter");
class LightController {
    constructor() {
        this.fetchOneLightUseCase = new fetch_one_light_usecase_1.FetchOneLightUseCase(new light_adapter_1.LightAdapter());
        this.updatePowerOnLightUsecase = new update_power_on_light_usecase_1.UpdatePowerOnLightUsecase(new light_adapter_1.LightAdapter());
        this.updateColorLightUsecase = new update_color_light_usecase_copy_1.UpdateColorLightUsecase(new light_adapter_1.LightAdapter());
        this.updateBrightnessLightUsecase = new update_brigthness_light_usecase_1.UpdateBrightnessLightUsecase(new light_adapter_1.LightAdapter());
        this.updateAutoLightUsecase = new update_auto_light_usecase_1.UpdateAutoLightUsecase(new light_adapter_1.LightAdapter());
        this.updateMusicLightUsecase = new update_music_light_usecase_1.UpdateMusicLightUsecase(new light_adapter_1.LightAdapter());
    }
    router(server, opts, done) {
        server.get("/test", {
            preValidation: (request, reply, done) => {
                const { username, password } = request.query;
                done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
            },
        }, (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const customerHeader = request.headers["h-Custom"];
            // do something with request data
            return `logged in!`;
        }));
        server.get("/lights/:id", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const light = yield this.fetchOneLightUseCase.execute(request.params.id);
            reply.code(200).send(light);
        }));
        server.put("/lights/:id/powerOn", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const powerOn = request.body.powerOn;
            if (!id || !powerOn)
                return reply.code(400).send("Error: Arguments incorrects");
            const light = yield this.updatePowerOnLightUsecase.execute(id, powerOn);
            reply.code(200).send(light);
        }));
        server.put("/lights/:id/color", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const color = request.body.color;
            if (!id || !color)
                return reply.code(400).send("Error: Arguments incorrects");
            const light = yield this.updateColorLightUsecase.execute(id, color);
            reply.code(200).send(light);
        }));
        server.put("/lights/:id/brightness", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const brightness = request.body.brightness;
            if (!id || !brightness)
                return reply.code(400).send("Error: Arguments incorrects");
            const light = yield this.updateBrightnessLightUsecase.execute(id, brightness);
            reply.code(200).send(light);
        }));
        server.put("/lights/:id/auto", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const auto = request.body.auto;
            if (!id || !auto)
                return reply.code(400).send("Error: Arguments incorrects");
            const light = yield this.updateAutoLightUsecase.execute(id, auto);
            reply.code(200).send(light);
        }));
        server.put("/lights/:id/music", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const music = request.body.music;
            if (!id || !music)
                return reply.code(400).send("Error: Arguments incorrects");
            const light = yield this.updateMusicLightUsecase.execute(id, music);
            reply.code(200).send(light);
        }));
        done();
    }
}
exports.LightController = LightController;
