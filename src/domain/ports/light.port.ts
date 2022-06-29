import { Light } from "../models/light.model";

abstract class ILightPort {
  abstract fetchOne(id: string): Promise<Light>;
  abstract updatePowerOn(id: string, powerOn: boolean): Promise<Light>;
  abstract updateColor(id: string, color: string): Promise<Light>;
  abstract updateBrightness(id: string, brightness: number): Promise<Light>;
  abstract updateAutoBrightness(
    id: string,
    autoBrightness: boolean
  ): Promise<Light>;
  abstract updateRandomMode(id: string, randomMode: boolean): Promise<Light>;
  abstract updatePartyMode(id: string, partyMode: boolean): Promise<Light>;
}
export { ILightPort };
