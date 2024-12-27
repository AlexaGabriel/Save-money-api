import { ITransaction, IRepoTransaction } from "../Interface/InterfaceTransactions";
import { RepoTransactions } from "../Repository/RepoTransaction";
import { STransactions, STransactionsU } from "../Schema/Schema";
import { serviceStatistics } from "./serviceStatistics";

export class serviceTransaction{
    private RepoTransactions: IRepoTransaction;
    private serviceStatistics: serviceStatistics;
    constructor(){
        this.RepoTransactions = new RepoTransactions;
        this.serviceStatistics = new serviceStatistics;
    }

    async CreateTransaction({userId, type, amount, category, date}: ITransaction){
        const validate = STransactions.safeParse({userId, type, amount, category, date});
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const create = await this.RepoTransactions.CreateTransaction({userId, type, amount, category, date});
        return create;
    }
    async ListTransactions(userId: string){
        const list = await this.RepoTransactions.ListTransactions(userId);
        return list;
    }
    async ListTransactionsOfType(userId: string, type: "income"|"expense"){
        const list = await this.RepoTransactions.ListTransactionsOfType(userId, type);
        return list;
    }
    async ListTransaction(id: string){
        const list = await this.RepoTransactions.ListTransaction(id);
        return list;
    }
    async UpdateTransactions(id: string, data: ITransaction){
        const validate = STransactionsU.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.RepoTransactions.UpdateTransactions(id, data);
        return update;
    }
    async DeleteTransaction(id: string){
        const deleteTransaction = await this.RepoTransactions.DeleteTransaction(id);
        return deleteTransaction;
    }
    async updateStatistics(userId: string) {
        const userTransactions = await this.RepoTransactions.ListTransactions(userId);
        const totalIncome = userTransactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = userTransactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
        const balance = totalIncome - totalExpense;
        const updatedAt = new Date();
        const up = await this.serviceStatistics.UpdateStatistics(userId, { totalIncome, totalExpense, balance, updatedAt });
        return up;
    }
    async updateStatisticsById(id: string) {
        const userTransaction = await this.RepoTransactions.ListTransaction(id);
        if (!userTransaction || !userTransaction.userId) {
            throw new Error("Transaction not found or userId is missing");
        }
        const uid = userTransaction.userId;
        const userTransactions = await this.RepoTransactions.ListTransactions(uid);
        const totalIncome = userTransactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = userTransactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
        const balance = totalIncome - totalExpense;
        const updatedAt = new Date();
        const up = await this.serviceStatistics.UpdateStatistics(uid, { totalIncome, totalExpense, balance, updatedAt });
        return up;
    }}