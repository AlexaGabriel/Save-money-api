import { IRepoStatistics, IStatistics } from "../Interface/InterfaceStatistics";
import { RepoStatistics } from "../Repository/RepoStatistics";
import { SStatistics } from "../Schema/Schema";

export class serviceStatistics {
    private repoStatistics: IRepoStatistics;
    constructor() {
        this.repoStatistics = new RepoStatistics();
    }
    async CreateStatistics(userId: string): Promise<IStatistics> {
        console.log("Inside serviceStatistics.CreateStatistics with userId:", userId);
        const create = await this.repoStatistics.CreateStatistics(userId);
        return create;
    }
    async ListStatistics(userId: string): Promise<IStatistics | null> {
        const list = await this.repoStatistics.ListStatistics(userId);
        return list;
    }
    async UpdateStatistics(id: string, data: IStatistics): Promise<IStatistics> {
        const validate = SStatistics.safeParse(data);
        if (!validate.success) {
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.repoStatistics.UpdateStatistics(id, data);
        return update;
    }
}