import { FastifyRequest, FastifyReply } from "fastify";
import { serviceTransaction } from "../Service/serviceTransaction";

export class middTransaction{
    private serviceTransaction: serviceTransaction;
    constructor(){
        this.serviceTransaction = new serviceTransaction;
    }
    async handleCreateTransaction(req: FastifyRequest, res: FastifyReply){
        const {userId, type, amount, category, date} = req.body as {userId: string, type: "income" | "expense", amount: number, category: string, date: Date};
        try {
            const create = await this.serviceTransaction.CreateTransaction({userId, type, amount, category, date});
            res.status(201).send(create);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}