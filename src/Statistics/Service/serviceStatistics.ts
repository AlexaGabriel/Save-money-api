import { IRepoStatistics, IStatistics } from "../Types/InterfaceStatistics";
import { RepoStatistics } from "../Repositories/RepoStatistics";
import { SStatistics } from "../Schema/SchemaStatistcs";

export class serviceStatistics {
    private repoStatistics: IRepoStatistics;
    constructor() {
        this.repoStatistics = new RepoStatistics();
    }
    async CreateStatistics(userId: string): Promise<IStatistics> {
        const create = await this.repoStatistics.CreateStatistics(userId);
        return create;
    }
    async ListStatistics(userId: string): Promise<IStatistics | null> {
        const list = await this.repoStatistics.ListStatistics(userId);
        return list;
    }

    async UpdateStatistics(userId: string, {totalIncome, totalExpense, balance, updatedAt}: IStatistics): Promise<IStatistics> {
        const validate = SStatistics.safeParse({ totalIncome, totalExpense, balance, updatedAt});
        if (!validate.success) {
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.repoStatistics.UpdateStatistics(userId, { totalIncome, totalExpense, balance, updatedAt});
        return update;
    }
}