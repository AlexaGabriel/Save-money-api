import { FastifyRequest, FastifyReply } from "fastify";
import { serviceUser } from "../Service/serviceUser";

export class middUser{
    private ServiceUser : serviceUser;
    constructor(){
        this.ServiceUser = new serviceUser();
    }

    async handleCreateUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const {name, email, password} = request.body as {
            name: string
            email: string
            password: string
        };

        try {
            const newUser = await this.ServiceUser.CreateUser({
                name,
                email,
                password,
                createdAt: new Date(),
            });
            reply.status(201).send(newUser);
        } catch (error) {
            reply.status(500).send(`${error} failed create User`);
        }
    }
    async handleUpdateUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const {id} = request.params as {
            id: string
        };
        const {name, email, password} = request.body as {
            name: string
            email: string
            password: string
        };
        try {
            const updateUser = await this.ServiceUser.UpdateUsers({
                name,
                email,
                password,
                createdAt: new Date(),
            }, id);
            reply.status(200).send(updateUser);
        } catch (error) {
            reply.status(500).send(`${error} failed update User`);
        }
    }
    async handleListUsers(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const listUsers = await this.ServiceUser.ListUsers();
            reply.status(200).send(listUsers);
        } catch (error) {
            reply.status(500).send(`${error} failed list Users`);
        }
    }
        
}