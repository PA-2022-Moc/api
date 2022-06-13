import { FastifyRequest } from "fastify";

type TestRequest = FastifyRequest<{
  Querystring: { username: string; password: string };
}>;

type FetchOneRequest = FastifyRequest<{
  Params: { id: string };
}>;

type UpdatePowerOnRequest = FastifyRequest<{
  Params: { id: string };
  Body: { powerOn: boolean };
}>;

type UpdateColorRequest = FastifyRequest<{
  Params: { id: string };
  Body: { color: string };
}>;

type UpdateBrightnessRequest = FastifyRequest<{
  Params: { id: string };
  Body: { brightness: number };
}>;

type UpdateAutoRequest = FastifyRequest<{
  Params: { id: string };
  Body: { auto: boolean };
}>;

type UpdateMusicRequest = FastifyRequest<{
  Params: { id: string };
  Body: { music: boolean };
}>;

export {
  TestRequest,
  FetchOneRequest,
  UpdatePowerOnRequest,
  UpdateColorRequest,
  UpdateBrightnessRequest,
  UpdateAutoRequest,
  UpdateMusicRequest,
};
