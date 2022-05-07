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
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const LampeController = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.get('/auth', {
        preValidation: (request, reply, done) => {
            const { username, password } = request.query;
            console.log("ici");
            done(username !== 'admin' ? new Error('Must be admin') : undefined); // only validate `admin` account
        }
    }, (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const customerHeader = request.headers['h-Custom'];
        // do something with request data
        return `logged in!`;
    }));
    // server.post<{ Body: BlogAttrs }>('/blogs', {}, async (request, reply) => {
    //     try {
    //         const { Blog } = server.db.models;
    //         const blog = await Blog.addOne(request.body);
    //         await blog.save();
    //         return reply.code(201).send(blog);
    //     } catch (error) {
    //         request.log.error(error);
    //         return reply.send(500);
    //     }
    // });
    // server.get<{ Params: blogParams }>('/blogs/:id', {}, async (request, reply) => {
    //     try {
    //         const ID = request.params.id;
    //         const { Blog } = server.db.models;
    //         const blog = await Blog.findById(ID);
    //         if (!blog) {
    //             return reply.send(404);
    //         }
    //         return reply.code(200).send(blog);
    //     } catch (error) {
    //         request.log.error(error);
    //         return reply.send(400);
    //     }
    // });
});
exports.default = (0, fastify_plugin_1.default)(LampeController);
