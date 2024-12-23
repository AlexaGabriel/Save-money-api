import { FastifyInstance } from 'fastify';
import {middUser} from '../Middleware/MiddUser';

export default async function routesUser(app: FastifyInstance) {
    const userMidd = new middUser();

    app.post('/user/create', async(request, reply) => {
        await userMidd.handleCreateUser(request, reply);
    });
};