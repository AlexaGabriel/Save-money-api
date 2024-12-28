import { IGoal, IRepoGoal } from "../Types/InterfaceGoal";
import { prisma } from "../../../database/prisma";

export class RepoGoal implements IRepoGoal{
    async CreateGoal({userId,name, targetAmount,currentAmount, deadline, createdAt}:IGoal): Promise<IGoal> {
        const create = await prisma.goal.create({
            data:{
                userId: userId!,
                name, 
                targetAmount,
                currentAmount, 
                deadline, 
                createdAt
            }
        });
        return create;
    }
    async ListGoal(userId: string, id:string): Promise<IGoal | null> {
        const list = await prisma.goal.findUnique({
            where:{
                userId,
                id
            }
        });
        return list;
    }
    async ListAllGoal(userId: string): Promise<IGoal[]> {
        const list = await prisma.goal.findMany({
            where:{
                userId
            }
        });
        return list;
    }
    async UpdateGoal(id: string, data: IGoal): Promise<IGoal> {
        const update = await prisma.goal.update({
            where:{
                id
            },
            data
        });
        return update;
    }
    async DeleteGoal(id: string): Promise<IGoal> {
        const delet = await prisma.goal.delete({
            where:{
                id
            }
        });
        return delet;
    }

}