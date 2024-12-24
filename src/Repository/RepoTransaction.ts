import { prisma } from "../database/prisma";
import {ITransaction,IRepoTransaction } from "../Interface/InterfaceTransactions";

export class RepoTransactions implements IRepoTransaction{
    async CreateTransaction({userId, type, amount, category, date}:ITransaction): Promise<ITransaction> {
        const create = await prisma.transaction.create({
            data:{
                userId,
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

}