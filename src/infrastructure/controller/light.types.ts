import { FastifyRequest } from "fastify";

type TestRequest = FastifyRequest<{
  Querystring: { username: string; password: string };
}>;

type FetchOneRequest = FastifyRequest<{
  Params: { id: string };
}>;

export { TestRequest, FetchOneRequest };
