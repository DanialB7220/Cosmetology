import { FastifyInstance, RegisterOptions } from 'fastify';

import nineanime from './9anime';

const routes = async (fastify: FastifyInstance, options: RegisterOptions) => {
  await fastify.register(nineanime, { prefix: '/9anime' });

  fastify.get('/', async (_request, reply) => {
    reply.status(200).send('Welcome to Consumet Anime 🗾 (9anime only)');
  });
};

export default routes;
