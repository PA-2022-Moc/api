import { IMQTTPort } from "../../domain/ports/mqtt.port";
import { clientMqtt } from "../config/mosquitto";

const DELAY_TIME = 2000;

class MQTTAdapter implements IMQTTPort {
  static lightState: boolean;
  private delay = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async publishPowerOn(topic: string, powerOn: boolean): Promise<boolean> {
    MQTTAdapter.lightState = false;

    clientMqtt.on("message", () => (MQTTAdapter.lightState = true));
    clientMqtt.publish(topic, `p-${powerOn}`);

    await this.delay(DELAY_TIME);
    return MQTTAdapter.lightState;
  }

  async publishColor(topic: string, color: string): Promise<boolean> {
    MQTTAdapter.lightState = false;

    clientMqtt.on("message", () => (MQTTAdapter.lightState = true));
    clientMqtt.publish(topic, `c-${color}`);

    await this.delay(DELAY_TIME);
    return MQTTAdapter.lightState;
  }

  async publishBrightness(topic: string, brightness: number): Promise<boolean> {
    MQTTAdapter.lightState = false;

    clientMqtt.on("message", () => (MQTTAdapter.lightState = true));
    clientMqtt.publish(topic, `b-${brightness}`);

    await this.delay(DELAY_TIME);
    return MQTTAdapter.lightState;
  }
  async publishRandomMode(
    topic: string,
    randomMode: boolean
  ): Promise<boolean> {
    MQTTAdapter.lightState = false;

    clientMqtt.on("message", () => (MQTTAdapter.lightState = true));
    clientMqtt.publish(topic, `r-${randomMode}`);

    await this.delay(DELAY_TIME);
    return MQTTAdapter.lightState;
  }

  async publishPartyMode(topic: string, partyMode: boolean): Promise<boolean> {
    MQTTAdapter.lightState = false;

    clientMqtt.on("message", () => (MQTTAdapter.lightState = true));
    clientMqtt.publish(topic, `f-${partyMode}`);

    await this.delay(DELAY_TIME);
    return MQTTAdapter.lightState;
  }
}

export { MQTTAdapter };
