import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateAutoLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, auto: boolean): Promise<Light> {
    const light = await this.lightPort.updateAuto(id, auto);
    return light;
  }
}

export { UpdateAutoLightUsecase };
