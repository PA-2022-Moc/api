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
exports.LightAdapter = void 0;
const mongodb_1 = require("mongodb");
const light_presenter_1 = require("../controller/light.presenter");
const light_entity_1 = require("../entities/light.entity");
class LightAdapter {
    fetchOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOne({
                _id: new mongodb_1.ObjectId(id),
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
    updatePowerOn(powerOn) {
        throw new Error("Method not implemented.");
    }
    updateColor(color) {
        throw new Error("Method not implemented.");
    }
    updateBrightness(brightness) {
        throw new Error("Method not implemented.");
    }
    updateAuto(auto) {
        throw new Error("Method not implemented.");
    }
    updateMusic(music) {
        throw new Error("Method not implemented.");
    }
}
exports.LightAdapter = LightAdapter;
