import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateAutoBrightnessLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, autoBrightness: boolean): Promise<Light> {
    const light = await this.lightPort.updateAutoBrightness(id, autoBrightness);
    return light;
  }
}

export { UpdateAutoBrightnessLightUsecase };
