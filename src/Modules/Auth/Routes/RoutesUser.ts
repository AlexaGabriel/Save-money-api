import { FastifyInstance } from 'fastify';
import {MiddAuth} from '../Middlewares/MiddAuth';

export default async function routesAuth(app: FastifyInstance) {
    const authMidd = new MiddAuth();

    app.post('/login', async(request, reply) => {
        await authMidd.handleAuthUser(request, reply);
    });
   
};