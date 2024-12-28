import { FastifyRequest, FastifyReply } from "fastify";
import { serviceUser } from "../Service/serviceUser";
import bcrypt from "bcrypt";

export class middUser{
    private ServiceUser : serviceUser;
    constructor(){
        this.ServiceUser = new serviceUser();
    }

    async handleCreateUser(request: FastifyRequest, reply: FastifyReply) {
        const {name, email, password} = request.body as {
            name: string
            email: string
            password: string
        };
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        try {
            const newUser = await this.ServiceUser.CreateUser({
                name,
                email,
                password: hashedPassword,
                createdAt: new Date(),
            });
            reply.status(201).send(newUser);
        } catch (error) {
            reply.status(500).send(`${error} failed create User`);
        }
    }
    async handleUpdateUser(request: FastifyRequest, reply: FastifyReply) {
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
    async handleListUsers(request: FastifyRequest, reply: FastifyReply) {
        try {
            const listUsers = await this.ServiceUser.ListUsers();
            reply.status(200).send(listUsers);
        } catch (error) {
            reply.status(500).send(`${error} failed list Users`);
        }
    }
    async handleDeleteUser(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.params as {
            id:string
        };
        try {
            const delet = await this.ServiceUser.DeleteUser(id);
            reply.status(200).send(delet);
        } catch (error) {
            reply.status(500).send(error);
        }
    }
        
}