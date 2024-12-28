import { IGoal, IRepoGoal } from "../Types/InterfaceGoal";
import { RepoGoal } from "../Repositories/RepoGoal";
import { SGoal, SGoalU } from "../Schema/SchemaGoal";

export class serviceGoal{
    private repoGoal:IRepoGoal;
    constructor(){
        this.repoGoal = new RepoGoal;
    }

    async CreateGoal({userId,name, targetAmount,currentAmount, deadline, createdAt}:IGoal): Promise<IGoal> {
        const validate = SGoal.safeParse({userId, name, targetAmount, currentAmount, deadline, createdAt});
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const create = await this.repoGoal.CreateGoal({userId,name, targetAmount,currentAmount, deadline, createdAt});
        return create;
    }
    async ListGoal(userId: string, id:string): Promise<IGoal | null> {
        const list = await this.repoGoal.ListGoal(userId, id);
        return list;
    }
    async ListAllGoal(userId: string): Promise<IGoal[]> {
        const list = await this.repoGoal.ListAllGoal(userId);
        return list;
    }
    async UpdateGoal(id: string, data: IGoal): Promise<IGoal> {
        const validate = SGoalU.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.repoGoal.UpdateGoal(id, data);
        return update;
    }
    async DeleteGoal(id: string): Promise<IGoal> {
        const delet = await this.repoGoal.DeleteGoal(id);
        return delet;
    }

}