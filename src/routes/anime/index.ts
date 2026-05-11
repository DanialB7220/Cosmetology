import { FastifyInstance, RegisterOptions } from 'fastify';

import gogoanime from './gogoanime';

const routes = async (fastify: FastifyInstance, options: RegisterOptions) => {
  await fastify.register(gogoanime, { prefix: '/gogoanime' });

  fastify.get('/', async (_request, reply) => {
    reply.status(200).send('Welcome to Consumet Anime 🗾 (gogoanime only)');
  });
};

export default routes;
