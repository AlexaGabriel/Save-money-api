import { ITransaction, IRepoTransaction } from "../Interface/InterfaceTransactions";
import { RepoTransactions } from "../Repository/RepoTransaction";
import { STransactions } from "../Schema/Schema";

export class serviceTransaction{
    private RepoTransactions: IRepoTransaction;
    constructor(){
        this.RepoTransactions = new RepoTransactions;
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
    async UpdateTransactions(id: string, data: ITransaction){
        const validate = STransactions.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.RepoTransactions.UpdateTransactions(id, data);
        return update;
    }
}