import mongoose from "mongoose";
import { mongoDBuri } from "../config/mongodb";

interface LightEntity {
  _id: string;
  powerOn: boolean;
  color: string;
  brightness: number;
  autoBrightness: boolean;
  randomMode: boolean;
  partyMode: boolean;
}

const Schema = mongoose.Schema;

const lightSchema = new Schema<LightEntity>({
  powerOn: Boolean,
  color: String,
  brightness: Number,
  autoBrightness: Boolean,
  randomMode: Boolean,
  partyMode: Boolean,
});

const connMongo = mongoose.createConnection(mongoDBuri);

const LightModel = connMongo.model<LightEntity>("Light", lightSchema);

export { LightModel, LightEntity };
