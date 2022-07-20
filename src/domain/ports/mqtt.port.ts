abstract class IMQTTPort {
  abstract publishOne(topic: string): Promise<boolean>;
  abstract publishPowerOn(topic: string, powerOn: boolean): Promise<boolean>;
  abstract publishColor(topic: string, color: string): Promise<boolean>;
  abstract publishBrightness(
    topic: string,
    brightness: number
  ): Promise<boolean>;
  abstract publishAutoBrightness(
    topic: string,
    autoBrightness: boolean
  ): Promise<boolean>;
  abstract publishRandomMode(
    topic: string,
    randomMode: boolean
  ): Promise<boolean>;
  abstract publishPartyMode(
    topic: string,
    partyMode: boolean
  ): Promise<boolean>;
}

export { IMQTTPort };
