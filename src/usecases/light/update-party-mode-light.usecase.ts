import { Light } from "../../domain/models/light.model";
import { ILightPort } from "../../domain/ports/light.port";
import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { espMacAddress } from "../../infrastructure/config/mosquitto";

class UpdatePartyModeLightUsecase {
  constructor(
    private readonly lightPort: ILightPort,
    private readonly mqttPort: IMQTTPort
  ) {}

  async execute(id: string, partyMode: boolean): Promise<Light> {
    const isEspReached = await this.mqttPort.publishPartyMode(
      espMacAddress,
      partyMode
    );
    if (!isEspReached) {
      throw new Error("error reaching esp by mqtt");
    }
    const light = await this.lightPort.updatePartyMode(id, partyMode);
    return light;
  }
}

export { UpdatePartyModeLightUsecase };
