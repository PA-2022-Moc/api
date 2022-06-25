abstract class IMQTTPort {
  abstract publishPowerOn(topic: string, powerOn: boolean): Promise<boolean>;
  abstract publishColor(topic: string, color: string): Promise<boolean>;
  abstract publishBrightness(
    topic: string,
    brightness: number
  ): Promise<boolean>;
  abstract publishRandomMode(
    topic: string,
    randomMode: boolean
  ): Promise<boolean>;
}

export { IMQTTPort };
