import { IStatistics, IRepoStatistics } from "../Interface/InterfaceStatistics";
import { prisma } from "../database/prisma";

export class RepoStatistics implements IRepoStatistics{
    async CreateStatistics(userId: string): Promise<IStatistics> {
        console.log("Inside RepoStatistics.CreateStatistics with userId:", userId);
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
    async UpdateStatistics(id: string, data: IStatistics): Promise<IStatistics> {
        const update = await prisma.statistics.update({
            where: {
                userId: id
            },
            data
        });
        return update;
    }
    
}