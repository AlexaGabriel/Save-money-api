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
}