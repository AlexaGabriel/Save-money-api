import { FastifyReply, FastifyRequest } from "fastify";
import { serviceStatistics } from "../Service/serviceStatistics";

export class middStatistics{
    private serviceStatistics: serviceStatistics;
    constructor(){
        this.serviceStatistics = new serviceStatistics();
    }
    async ListStatistics(request: FastifyRequest, reply: FastifyReply){
        try {
            const { userId } = request.params as { userId: string };
            const list = await this.serviceStatistics.ListStatistics(userId);
            reply.status(200).send(list);
        } catch (error) {
            reply.status(500).send(error);
        }
        
    }
    async UpdateStatistics(request: FastifyRequest, reply: FastifyReply){
        try {
            const { id } = request.params as { id: string };
            const { userId, totalIncome, totalExpense, balance, updatedAt } = request.body as { userId: string, totalIncome: number, totalExpense: number, balance: number, updatedAt: Date };
            const update = await this.serviceStatistics.UpdateStatistics(id, { userId, totalIncome, totalExpense, balance, updatedAt });
            return reply.status(200).send(update);
        } catch (error) {
            reply.status(500).send(error);
        }
        
    }
}