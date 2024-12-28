import { FastifyRequest, FastifyReply } from "fastify";
import { serviceBill } from "../Service/serviceBill";

export class MiddBill{
    private serviceBill: serviceBill;
    constructor(){
        this.serviceBill = new serviceBill();
    }
    async createBill(request: FastifyRequest, reply: FastifyReply){
        const { userId, name, amount, dueDate, isPaid, createdAt } = request.body as { userId: string, name: string, amount: number, dueDate: Date, isPaid: boolean, createdAt: Date };
        try {
            const create = await this.serviceBill.createBill({ userId, name, amount, dueDate, isPaid, createdAt });
            reply.code(201).send(create);
        } catch (error) {
            reply.code(500).send(error);
        }
    }
    async listBill(request: FastifyRequest, reply: FastifyReply){
        const { userId, id } = request.params as { userId: string, id: string };
        try {
            const list = await this.serviceBill.listBill(userId, id);
            reply.code(200).send(list);
        } catch (error) {
            reply.code(500).send(error);
        }
    }
    async listAllBill(request: FastifyRequest, reply: FastifyReply){
        const { userId } = request.params as { userId: string };
        try {
            const list = await this.serviceBill.listAllBill(userId);
            reply.code(200).send(list);
        }catch (error) {
            reply.code(500).send(error);
        }
    }
    async updateBill(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string };
        const { name, amount, dueDate, isPaid, createdAt } = request.body as {  name: string, amount: number, dueDate: Date, isPaid: boolean, createdAt: Date };
        try {
            const update = await this.serviceBill.updateBill(id, { name, amount, dueDate, isPaid, createdAt });
            reply.code(200).send(update);
        } catch (error) {
            reply.code(500).send(error);
        }
    }
    async deleteBill(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.params as { id: string };
        try {
            const deleteBill = await this.serviceBill.deleteBill(id);
            reply.code(200).send(deleteBill);
        }catch (error) {
            reply.code(500).send(error);
        }
    }
}