"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("../config/mongodb");
const Schema = mongoose_1.default.Schema;
const lightSchema = new Schema({
    powerOn: Boolean,
    color: String,
    brightness: Number,
    autoBrightness: Boolean,
    randomMode: Boolean,
});
const connMongo = mongoose_1.default.createConnection(mongodb_1.mongoDBuri);
const LightModel = connMongo.model("Light", lightSchema);
exports.LightModel = LightModel;
