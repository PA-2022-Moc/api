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
const LightController = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.get('/light', {
        preValidation: (request, reply, done) => {
            const { username, password } = request.query;
            done(username !== 'admin' ? new Error('Must be admin') : undefined); // only validate `admin` account
        }
    }, (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const customerHeader = request.headers['h-Custom'];
        // do something with request data
        return `logged in!`;
    }));
});
exports.LightController = LightController;
