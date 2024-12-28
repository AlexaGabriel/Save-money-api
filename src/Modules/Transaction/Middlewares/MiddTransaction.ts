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
            await this.serviceTransaction.updateStatistics(userId);
            res.status(201).send(create);
        } catch (error) {
            res.status(400).send(error);
        }
    }    
    async handleListTransactions(req: FastifyRequest, res: FastifyReply){
        const {userId} = req.params as {userId: string};
        try {
            const list = await this.serviceTransaction.ListTransactions(userId);
            res.status(200).send(list);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async handleListTransactionsOfType(req: FastifyRequest, res: FastifyReply){
        const {userId, type} = req.params as {userId: string, type: "income" | "expense"};
        try {
            const list = await this.serviceTransaction.ListTransactionsOfType(userId, type);
            res.status(200).send(list);
        }catch (error) {
            res.status(400).send(error);
        }
    }
    async handleListTransaction(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as {id: string};
        try {
            const list = await this.serviceTransaction.ListTransaction(id);
            res.status(200).send(list);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async handleUpdateTransactions(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as {id: string};
        const {data} = req.body as {data: { type: "income" | "expense", amount: number, category: string, date: Date}};
        try {
            const update = await this.serviceTransaction.UpdateTransactions(id, data);
            const up = await this.serviceTransaction.updateStatisticsById(id);
            console.log(up);
            res.status(200).send({update, up});
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async handleDeleteTransaction(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as {id: string};
        try {
            const deleteTransaction = await this.serviceTransaction.DeleteTransaction(id);
            res.status(200).send(deleteTransaction);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}