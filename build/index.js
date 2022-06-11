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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const light_1 = require("./controller/light");
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = (0, fastify_1.fastify)({
    logger: true
});
// MONGODB_PWD="OfTXlVbW
// MONGO_DB_URI=`mongodb
// MONGO_ID_LIGHT_OBJECT
//mongoDB
const mongoDBuri = process.env.MONGO_DB_URI || "";
const client = new mongodb_1.MongoClient(mongoDBuri);
const mongoIdLightObject = process.env.MONGO_ID_LIGHT_OBJECT;
console.log(mongoDBuri);
console.log(mongoIdLightObject);
// {"_id":{"$oid":"62a4637d1e15464d246f9afb"},"powerOn":false,"color":"FFFFFF","brightness":{"$numberInt":"50"},"auto":false,"music":false}
server.register(light_1.LightController, { prefix: '/api' });
const start = () => {
    server.listen(port, address).then((addr) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(`Server started successfully\nListening on ${addr}`);
            yield client.connect();
            const database = client.db('lightcontrol');
            const movies = database.collection('light');
            // Query for a movie that has the title 'Back to the Future'
            const query = { _id: new mongodb_1.ObjectId(mongoIdLightObject) };
            const light = yield movies.findOne(query);
            console.log(light);
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    })).catch(err => {
        server.log.error(err);
        process.exit(1);
    });
};
start();
