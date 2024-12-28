import { FastifyInstance } from 'fastify';
import { middTransaction } from '../Middlewares/MiddTransaction';

export default async function routesTransaction(app: FastifyInstance) {
    const TransactionMidd = new middTransaction();

    app.post('/transaction/create', async(request, reply) => {
        await TransactionMidd.handleCreateTransaction(request, reply);
    });
    app.get('/transaction/list', async(request, reply) => {
        await TransactionMidd.handleListTransactions(request, reply);
    });
    app.get('/transaction/list/:userId/:type', async(request, reply) => {
        await TransactionMidd.handleListTransactionsOfType(request, reply);
    });
    app.get('/transaction/list/:id', async(request, reply) => {
        await TransactionMidd.handleListTransaction(request, reply);
    });
    app.put('/transaction/update/:id', async(request, reply) => {
        await TransactionMidd.handleUpdateTransactions(request, reply);
    });
    app.delete('/transaction/delete/:id', async(request, reply) => {
        await TransactionMidd.handleDeleteTransaction(request, reply);
    });
};