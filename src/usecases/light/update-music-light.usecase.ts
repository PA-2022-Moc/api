import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateMusicLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, music: boolean): Promise<Light> {
    const light = await this.lightPort.updateMusic(id, music);
    return light;
  }
}

export { UpdateMusicLightUsecase };
