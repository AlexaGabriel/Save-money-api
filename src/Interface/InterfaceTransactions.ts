/* eslint-disable no-unused-vars */
export interface ITransaction{
    userId?: string
    type: "income"|"expense"
    amount:number
    category:string
    date:Date
}

export interface IRepoTransaction{
    CreateTransaction(data:ITransaction): Promise<ITransaction>
    ListTransactions(userId: string): Promise<ITransaction[]>
    ListTransactionsOfType(userId: string, type: "income"|"expense"): Promise<ITransaction[]>
    ListTransaction(id:string): Promise<ITransaction>
    UpdateTransactions(id:string, data:ITransaction): Promise<ITransaction>
    DeleteTransaction(id:string): Promise<ITransaction>
}