import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdateRandomModeLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, randomMode: boolean): Promise<Light> {
    const isEspReached = await this.mqttPort.publishRandomMode(
      espMacAddress,
      randomMode
    );
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }
    const light = await this.lightPort.updateRandomMode(id, randomMode);
    return light;
  }
}

export { UpdateRandomModeLightUsecase };
