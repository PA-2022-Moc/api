import { Light } from "../models/light.model";

abstract class ILightPort {
  abstract fetchOne(id: string): Promise<Light>;
  abstract updatePowerOn(powerOn: boolean): Promise<Light>;
  abstract updateColor(color: string): Promise<Light>;
  abstract updateBrightness(brightness: number): Promise<Light>;
  abstract updateAuto(auto: boolean): Promise<Light>;
  abstract updateMusic(music: boolean): Promise<Light>;
}
export { ILightPort };
