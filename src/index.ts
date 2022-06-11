import { fastify } from 'fastify';
import { MongoClient, ObjectId } from "mongodb";
import dotenv from 'dotenv';

import { LightController } from './controller/light';

//get env variables
dotenv.config();

//server config
const port = process.env.PORT || 5000;
const address = "0.0.0.0";
const server = fastify({
  logger: true
});

//mongoDB config
const mongoDBuri = process.env.MONGO_DB_URI || "";
const client = new MongoClient(mongoDBuri);
const mongoIdLightObject = process.env.MONGO_ID_LIGHT_OBJECT;


server.register(LightController, { prefix: '/api'})
const start = () => {
  
    server.listen(port, address).then(async (addr) => {
      try {
      console.log(`Server started successfully\nListening on ${addr}`);
        await client.connect();
        const database = client.db('lightcontrol');
        const lights = database.collection('light');
        const light = await lights.findOne({ _id: new ObjectId(mongoIdLightObject) });
        console.log(light);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }).catch(err => {
      server.log.error(err);
      process.exit(1)
    });
};
start();
