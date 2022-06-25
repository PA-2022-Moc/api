import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdatePowerOnLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, powerOn: boolean): Promise<Light> {
    const isEspReached = await this.mqttPort.publishPowerOn(
      espMacAddress,
      powerOn
    );
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }
    const light = await this.lightPort.updatePowerOn(id, powerOn);
    return light;
  }
}

export { UpdatePowerOnLightUsecase };
