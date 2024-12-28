import { FastifyInstance } from 'fastify';
import { middStatistics } from '../Middlewares/MiddStatistics';

export default async function routesStatitics(app: FastifyInstance) {
    const MiddStatistics = new middStatistics();

    app.get('/statistic/list/:id', async(request, reply) => {
        await MiddStatistics.ListStatistics(request, reply);
    });
};