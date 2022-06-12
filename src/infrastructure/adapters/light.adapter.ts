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
  updatePowerOn(powerOn: boolean): Promise<Light> {
    throw new Error("Method not implemented.");
  }
  updateColor(color: string): Promise<Light> {
    throw new Error("Method not implemented.");
  }
  updateBrightness(brightness: number): Promise<Light> {
    throw new Error("Method not implemented.");
  }
  updateAuto(auto: boolean): Promise<Light> {
    throw new Error("Method not implemented.");
  }
  updateMusic(music: boolean): Promise<Light> {
    throw new Error("Method not implemented.");
  }
}

export { LightAdapter };
