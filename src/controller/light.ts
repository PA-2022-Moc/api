import { FastifyPluginAsync, FastifyInstance, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";

interface IQuerystring {
    username: string;
    password: string;
  }
  
  interface IHeaders {
    'h-Custom': string;
  }

const LightController: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {

    server.get<{
        Querystring: IQuerystring,
        Headers: IHeaders
      }>('/light', {
        preValidation: (request, reply, done) => {
          const { username, password } = request.query
          
          done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
        }
      }, async (request, reply) => {
        const customerHeader = request.headers['h-Custom']
        // do something with request data
        return `logged in!`
      })
};
export {LightController};