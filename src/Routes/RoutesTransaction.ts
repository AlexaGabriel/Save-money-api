import { FastifyInstance } from 'fastify';
import { middTransaction } from '../Middleware/MiddTransaction';

export default async function routesTransaction(app: FastifyInstance) {
    const TransactionMidd = new middTransaction();

    app.post('/transaction/create', async(request, reply) => {
        await TransactionMidd.handleCreateTransaction(request, reply);
    });
};