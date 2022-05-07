import { fastify } from 'fastify';
import { LightController } from './controller/light';

const port = process.env.PORT || 5000;
const address = "0.0.0.0";

const server = fastify({
  logger: true
});

server.register(LightController, { prefix: '/api'})
const start = () => {
    server.listen(port, address).then((addr) => console.log(`Server started successfully\nListening on ${addr}`)).catch(err => {
      server.log.error(err);
      process.exit(1)
    });
};
start();
