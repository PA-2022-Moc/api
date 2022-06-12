import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class FetchOneLightUseCase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string): Promise<Light> {
    const light = await this.lightPort.fetchOne(id);
    return light;
  }
}

export { FetchOneLightUseCase };
