import { FastifyInstance } from 'fastify';
import { MiddGoal } from '../Middlewares/MiddGoal';

export default async function routesGoal(app: FastifyInstance) {
    const middGoal = new MiddGoal();
    app.post('/goal/create', async(request, reply) => {
        await middGoal.handlerCreateGoal(request, reply);
    });
    app.get('/goal/list/:userId/:id', async(request, reply) => {
        await middGoal.handlerListGoal(request, reply);
    });
    app.get('/goal/listall/:userId', async(request, reply) => {
        await middGoal.handlerListAllGoal(request, reply);
    });
    app.put('/goal/update/:id', async(request, reply) => {
        await middGoal.handlerUpdateGoal(request, reply);
    });
    app.delete('/goal/delete/:id', async(request, reply) => {
        await middGoal.handlerDeleteGoal(request, reply);
    });
};