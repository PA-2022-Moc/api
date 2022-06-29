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

type UpdateAutoBrightnessRequest = FastifyRequest<{
  Params: { id: string };
  Body: { autoBrightness: boolean };
}>;

type UpdateRandomModeRequest = FastifyRequest<{
  Params: { id: string };
  Body: { randomMode: boolean };
}>;

type UpdatePartyModeRequest = FastifyRequest<{
  Params: { id: string };
  Body: { partyMode: boolean };
}>;

export {
  TestRequest,
  FetchOneRequest,
  UpdatePowerOnRequest,
  UpdateColorRequest,
  UpdateBrightnessRequest,
  UpdateAutoBrightnessRequest,
  UpdateRandomModeRequest,
  UpdatePartyModeRequest,
};
