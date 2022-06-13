import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateBrightnessLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, brightness: number): Promise<Light> {
    if (0 > brightness || brightness > 100) {
      throw new Error("Brightness value must be between 0 and 100");
    }
    const light = await this.lightPort.updateBrightness(id, brightness);
    return light;
  }
}

export { UpdateBrightnessLightUsecase };
