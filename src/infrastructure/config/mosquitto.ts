import mqtt from "mqtt";
import dotenv from "dotenv";

dotenv.config();

const clientMqttUri = process.env.MOSQUITTO_URI || "mqtt://localhost:1883";
const username = process.env.MOSQUITTO_USER || "";
const password = process.env.MOSQUITTO_PWD || "";

const clientMqtt = mqtt.connect(clientMqttUri, { username, password });
const espMacAddress = process.env.ESP_MAC_ADDRESS || "presence";

export { clientMqtt, espMacAddress };
