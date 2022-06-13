"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrightnessLightUsecase = void 0;
class UpdateBrightnessLightUsecase {
    constructor(lightPort) {
        this.lightPort = lightPort;
    }
    execute(id, brightness) {
        return __awaiter(this, void 0, void 0, function* () {
            if (0 > brightness || brightness > 100) {
                throw new Error("Brightness value must be between 0 and 100");
            }
            const light = yield this.lightPort.updateBrightness(id, brightness);
            return light;
        });
    }
}
exports.UpdateBrightnessLightUsecase = UpdateBrightnessLightUsecase;
