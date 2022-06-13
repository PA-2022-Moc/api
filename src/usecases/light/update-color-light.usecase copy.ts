import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";

class UpdateColorLightUsecase {
  constructor(private readonly lightPort: ILightPort) {}

  async execute(id: string, color: string): Promise<Light> {
    const regexFormatHexa = /^[a-fA-F0-9]{6}$/;
    if (!color.match(regexFormatHexa)) {
      throw new Error("Color string format incorrect");
    }
    const light = await this.lightPort.updateColor(id, color);
    return light;
  }
}

export { UpdateColorLightUsecase };
