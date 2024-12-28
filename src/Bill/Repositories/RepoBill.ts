import { IBill, IRepoBill } from "../Types/InterfaceBill";
import { prisma } from "../../database/prisma";

export class RepoBill implements IRepoBill{
    CreateBill(data: IBill): Promise<IBill> {
        const create = prisma.bill.create({
            data:{
                userId: data.userId!,
                name: data.name,
                amount: data.amount,
                dueDate: data.dueDate,
                isPaid: data.isPaid,
                createdAt: data.createdAt
            }
        });
        return create;
    }
    ListBill(userId: string, id: string): Promise<IBill | null> {
        const list = prisma.bill.findUnique({
            where:{
                id: id,
                userId: userId
            }
        });
        return list;
    }
    ListAllBill(userId: string): Promise<IBill[]> {
        const list = prisma.bill.findMany({
            where:{
                userId: userId
            }
        });
        return list;
    }
    UpdateBill(id: string, data: IBill): Promise<IBill> {
        const update = prisma.bill.update({
            where:{
                id: id
            },
            data:{
                userId: data.userId,
                name: data.name,
                amount: data.amount,
                dueDate: data.dueDate,
                isPaid: data.isPaid,
                createdAt: data.createdAt
            }
        });
        return update;
    }
    DeleteBill(id: string): Promise<IBill> {
        const delet = prisma.bill.delete({
            where:{
                id: id
            }
        });
        return delet;
    }
    
}