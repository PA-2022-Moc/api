import { LightEntity } from "../entities/light.entity";

class LightPresenter {
  id: string;
  powerOn: boolean;
  color: string;
  brightness: number;
  autoBrightness: boolean;
  randomMode: boolean;

  constructor(lightEntity: LightEntity) {
    this.id = lightEntity._id;
    this.powerOn = lightEntity.powerOn;
    this.color = lightEntity.color;
    this.brightness = lightEntity.brightness;
    this.autoBrightness = lightEntity.autoBrightness;
    this.randomMode = lightEntity.randomMode;
  }
}

export { LightPresenter };
