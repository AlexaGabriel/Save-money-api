import { FastifyInstance } from 'fastify';
import {middUser} from '../Middlewares/MiddUser';

export default async function routesUser(app: FastifyInstance) {
    const userMidd = new middUser();

    app.post('/user/create', async(request, reply) => {
        await userMidd.handleCreateUser(request, reply);
    });
    app.put('/user/update/:id', async(request, reply) => {
        await userMidd.handleUpdateUser(request, reply);
    });
    app.get('/user/list', async(request, reply) => {
        await userMidd.handleListUsers(request, reply);
    });
    app.delete('/user/delete/:id', async(request, reply) =>{
        await userMidd.handleDeleteUser(request, reply);
    });
};