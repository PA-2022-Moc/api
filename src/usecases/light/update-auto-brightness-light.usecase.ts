import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdateAutoBrightnessLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, autoBrightness: boolean): Promise<Light> {
    const isEspReached = await this.mqttPort.publishAutoBrightness(
      espMacAddress,
      autoBrightness
    );
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }
    const light = await this.lightPort.updateAutoBrightness(id, autoBrightness);
    return light;
  }
}

export { UpdateAutoBrightnessLightUsecase };
