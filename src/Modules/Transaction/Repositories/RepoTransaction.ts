import { prisma } from "../../../database/prisma";
import {ITransaction,IRepoTransaction } from "../Types/InterfaceTransactions";

export class RepoTransactions implements IRepoTransaction{
    async CreateTransaction({userId, type, amount, category, date}:ITransaction): Promise<ITransaction> {
        const create = await prisma.transaction.create({
            data:{
                userId: userId!,
                type: type as "income" | "expense",
                amount,
                category,
                date
            }
        });
        return create as ITransaction;
    }
    async ListTransactions(userId: string): Promise<ITransaction[]> {
        const list = await prisma.transaction.findMany({
            where: {
                userId
            }
        });
        return list.map(transaction => ({
            ...transaction,
            type: transaction.type as "income" | "expense"
        }));
    }
    async ListTransactionsOfType(userId: string, type: "income" | "expense"): Promise<ITransaction[]> {
        const list = await prisma.transaction.findMany({
            where:{
                userId,
                type
            }
        });
        return list.map(transaction => ({
            ...transaction,
            type: transaction.type as "income" | "expense"
        }));
    }
    async ListTransaction(id: string): Promise<ITransaction> {
        const list = await prisma.transaction.findUnique({
            where: {
                id
            }
        });
        return list as ITransaction;
    }
    async UpdateTransactions(id: string, data: ITransaction): Promise<ITransaction> {
        const update = await prisma.transaction.update({
            where: {
                id
            },
            data: {
                ...data,
                type: data.type as "income" | "expense"
            }
        });
        return update as ITransaction;
    }
    async DeleteTransaction(id: string): Promise<ITransaction> {
        const deleteTransaction = await prisma.transaction.delete({
            where: {
                id
            }
        });
        return deleteTransaction as ITransaction;
    }

}