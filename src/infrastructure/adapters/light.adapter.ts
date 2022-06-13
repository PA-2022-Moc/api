import { ObjectId } from "mongodb";

import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { LightPresenter } from "../controller/light.presenter";
import { LightModel } from "../entities/light.entity";

class LightAdapter implements ILightPort {
  async fetchOne(id: string): Promise<Light> {
    const light = await LightModel.findOne({
      _id: new ObjectId(id),
    });
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
  async updatePowerOn(id: string, powerOn: boolean): Promise<Light> {
    const light = await LightModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { powerOn },
      {
        returnOriginal: false,
      }
    );
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
  async updateColor(id: string, color: string): Promise<Light> {
    const light = await LightModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { color },
      {
        returnOriginal: false,
      }
    );
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
  async updateBrightness(id: string, brightness: number): Promise<Light> {
    const light = await LightModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { brightness },
      {
        returnOriginal: false,
      }
    );
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
  async updateAuto(id: string, auto: boolean): Promise<Light> {
    const light = await LightModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { auto },
      {
        returnOriginal: false,
      }
    );
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
  async updateMusic(id: string, music: boolean): Promise<Light> {
    const light = await LightModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { music },
      {
        returnOriginal: false,
      }
    );
    if (!light) throw new Error("Light not found");
    return new LightPresenter(light);
  }
}

export { LightAdapter };
