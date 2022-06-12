import { LightEntity } from "../entities/light.entity";

class LightPresenter {
  id: string;
  powerOn: boolean;
  color: string;
  brightness: number;
  auto: boolean;
  music: boolean;

  constructor(lightEntity: LightEntity) {
    this.id = lightEntity._id;
    this.powerOn = lightEntity.powerOn;
    this.color = lightEntity.color;
    this.brightness = lightEntity.brightness;
    this.auto = lightEntity.auto;
    this.music = lightEntity.music;
  }
}

export { LightPresenter };
