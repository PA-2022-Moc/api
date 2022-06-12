import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoDBuri = process.env.MONGODB_URI || "";
const client = new MongoClient(mongoDBuri);

export { client, mongoDBuri };
