import { Light } from "../models/light.model";

abstract class ILightPort {
  abstract fetchOne(id: string): Promise<Light>;
  abstract updatePowerOn(id: string, powerOn: boolean): Promise<Light>;
  abstract updateColor(id: string, color: string): Promise<Light>;
  abstract updateBrightness(id: string, brightness: number): Promise<Light>;
  abstract updateAuto(id: string, auto: boolean): Promise<Light>;
  abstract updateMusic(id: string, music: boolean): Promise<Light>;
}
export { ILightPort };
