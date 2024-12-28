import { FastifyReply, FastifyRequest } from "fastify";
import { serviceGoal } from "../Service/serviceGoal";

export class MiddGoal{
    private ServiceGoal: serviceGoal;
    constructor(){
        this.ServiceGoal = new serviceGoal();
    }
    async handlerCreateGoal(request: FastifyRequest, reply: FastifyReply){
        const {userId, name, targetAmount, currentAmount, deadline} = request.body as {userId:string, name: string, targetAmount: number, currentAmount: number, deadline: Date};

        try {
            const create = await this.ServiceGoal.CreateGoal({userId, name, targetAmount, currentAmount, deadline, createdAt: new Date()});
            reply.status(201).send(create);
        } catch (error) {
            reply.status(500).send(error);
        }
    }
    async handlerListGoal(request: FastifyRequest, reply: FastifyReply){
        const {userId, id} = request.params as {userId: string, id: string};
        try {
            const list = await this.ServiceGoal.ListGoal(userId, id);
            reply.status(200).send(list);
        } catch (error) {
            reply.status(500).send(error);
        }
    }
    async handlerListAllGoal(request: FastifyRequest, reply: FastifyReply){
        const {userId} = request.params as {userId: string};
        try {
            const list = await this.ServiceGoal.ListAllGoal(userId);
            reply.status(200).send(list);
        } catch (error) {
            reply.status(500).send(error);
        }
    }
    async handlerUpdateGoal(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.params as {id: string};
        const {userId, name, targetAmount, currentAmount, deadline} = request.body as {userId:string, name: string, targetAmount: number, currentAmount: number, deadline: Date};
        try {
            const update = await this.ServiceGoal.UpdateGoal(id, { userId, name, targetAmount, currentAmount, deadline, createdAt: new Date()});
            reply.status(200).send(update);
        }catch (error) {
            reply.status(500).send(error);
        }
    }
    async handlerDeleteGoal(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.params as {id: string};
        try {
            const delet = await this.ServiceGoal.DeleteGoal(id);
            reply.status(200).send(delet);
        } catch (error) {
            reply.status(500).send(error);
        }
    }
}