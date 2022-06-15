import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateRandomModeLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, randomMode: boolean): Promise<Light> {
    const light = await this.lightPort.updateRandomMode(id, randomMode);
    return light;
  }
}

export { UpdateRandomModeLightUsecase };
