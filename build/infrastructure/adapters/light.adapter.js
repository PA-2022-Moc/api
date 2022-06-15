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
    updatePowerOn(id, powerOn) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { powerOn }, {
                returnOriginal: false,
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
    updateColor(id, color) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { color }, {
                returnOriginal: false,
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
    updateBrightness(id, brightness) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { brightness }, {
                returnOriginal: false,
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
    updateAutoBrightness(id, autoBrightness) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { autoBrightness }, {
                returnOriginal: false,
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
    updateRandomMode(id, randomMode) {
        return __awaiter(this, void 0, void 0, function* () {
            const light = yield light_entity_1.LightModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { randomMode }, {
                returnOriginal: false,
            });
            if (!light)
                throw new Error("Light not found");
            return new light_presenter_1.LightPresenter(light);
        });
    }
}
exports.LightAdapter = LightAdapter;
