/* eslint-disable no-unused-vars */
export interface IBill {
    userId?: string; 
    name: string; 
    amount: number; 
    dueDate: Date; 
    isPaid: boolean; 
    createdAt: Date; 
}

export interface IRepoBill {
    CreateBill(data: IBill): Promise<IBill>;
    ListBill(userId: string, id: string): Promise<IBill | null>;
    ListAllBill(userId: string): Promise<IBill[]>;
    UpdateBill(id: string, data: IBill): Promise<IBill>;
    DeleteBill(id: string): Promise<IBill>;
}