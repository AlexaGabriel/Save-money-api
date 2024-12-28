import { IStatistics, IRepoStatistics } from "../Types/InterfaceStatistics";
import { prisma } from "../../../database/prisma";

export class RepoStatistics implements IRepoStatistics{
    async CreateStatistics(userId: string): Promise<IStatistics> {
        const create = await prisma.statistics.create({
            data: {
                userId,
                totalIncome: 0,
                totalExpense: 0,
                balance: 0,
                updatedAt: new Date(),
            }
        });
        return create;
    }

    async ListStatistics(userId: string): Promise<IStatistics | null> {
        const list = await prisma.statistics.findFirst({
            where: {
                userId
            }
        });
        return list;
    }
    async UpdateStatistics(userId: string, data: IStatistics): Promise<IStatistics> {
        const existingStatistics = await prisma.statistics.findUnique({
            where: { userId }
        });
        
        if (!existingStatistics) {
            throw new Error(`No statistics found for userId: ${userId}`);
        }
        const update = await prisma.statistics.update({
            where: {
                userId
            },
            data:{
                userId: data.userId!,
                totalIncome: data.totalIncome,
                totalExpense: data.totalExpense,
                balance: data.balance,
                updatedAt: new Date()
            }
        });
        return update;
    }
    
}