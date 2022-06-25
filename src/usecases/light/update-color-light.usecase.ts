import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdateColorLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, color: string): Promise<Light> {
    const regexFormatHexa = /^[a-fA-F0-9]{6}$/;
    if (!color.match(regexFormatHexa)) {
      throw new Error("Color string format incorrect");
    }

    const isEspReached = await this.mqttPort.publishColor(espMacAddress, color);
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }

    const light = await this.lightPort.updateColor(id, color);
    return light;
  }
}

export { UpdateColorLightUsecase };
