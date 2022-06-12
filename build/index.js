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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./router");
//get env variables
dotenv_1.default.config();
//server config
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = (0, fastify_1.fastify)({
    logger: true,
});
server.register(router_1.router, { prefix: "/api" });
const start = () => {
    server
        .listen(port, address)
        .then((addr) => __awaiter(void 0, void 0, void 0, function* () { return console.log(`Server started successfully\nListening on ${addr}`); }))
        .catch((err) => {
        server.log.error(err);
        process.exit(1);
    });
};
start();
