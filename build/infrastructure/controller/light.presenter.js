"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightPresenter = void 0;
class LightPresenter {
    constructor(lightEntity) {
        this.id = lightEntity._id;
        this.powerOn = lightEntity.powerOn;
        this.color = lightEntity.color;
        this.brightness = lightEntity.brightness;
        this.auto = lightEntity.auto;
        this.music = lightEntity.music;
    }
}
exports.LightPresenter = LightPresenter;
