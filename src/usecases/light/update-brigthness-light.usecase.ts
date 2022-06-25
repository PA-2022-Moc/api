import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdateBrightnessLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, brightness: number): Promise<Light> {
    if (0 > brightness || brightness > 100) {
      throw new Error("Brightness value must be between 0 and 100");
    }

    const isEspReached = await this.mqttPort.publishBrightness(
      espMacAddress,
      brightness
    );
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }

    const light = await this.lightPort.updateBrightness(id, brightness);
    return light;
  }
}

export { UpdateBrightnessLightUsecase };
