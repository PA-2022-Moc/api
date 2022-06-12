import dotenv from "dotenv";

dotenv.config();

const mongoDBuri = process.env.MONGODB_URI || "";

export { mongoDBuri };
