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
const light_adapter_1 = require("../adapters/light.adapter");
// const LightController: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
//     server.get<{
//         Querystring: IQuerystring,
//         Headers: IHeaders
//       }>('/light', {
//         preValidation: (request, reply, done) => {
//           const { username, password } = request.query
//           done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
//         }
//       }, async (request, reply) => {
//         const customerHeader = request.headers['h-Custom']
//         // do something with request data
//         return `logged in!`
//       })
// };
class LightController {
    constructor() {
        this.fetchOneLightUseCase = new fetch_one_light_usecase_1.FetchOneLightUseCase(new light_adapter_1.LightAdapter());
    }
    router(server, opts, done) {
        server.get("/light", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            const light = yield this.fetchOneLightUseCase.execute(request.params.id);
            reply.code(200).send(light);
        }));
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
        done();
    }
}
exports.LightController = LightController;
