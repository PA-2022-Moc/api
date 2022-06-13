import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdatePowerOnLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, powerOn: boolean): Promise<Light> {
    const light = await this.lightPort.updatePowerOn(id, powerOn);
    return light;
  }
}

export { UpdatePowerOnLightUsecase };
