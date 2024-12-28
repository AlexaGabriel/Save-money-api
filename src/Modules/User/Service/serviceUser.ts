import {IRepoUser, IUser} from "../Types/InterfaceUsers";
import { SUser } from "../Schema/SchemaUser";
import { RepoUser } from "../Repositories/RepoUser";
import { serviceStatistics } from "../../Statistics/Service/serviceStatistics";

export class serviceUser{
    private RepoUser: IRepoUser;
    private serviceStatistics: serviceStatistics;
    constructor() {
        this.RepoUser = new RepoUser;
        this.serviceStatistics = new serviceStatistics();
    }
    async CreateUser({name, email, password, createdAt}: IUser): Promise<IUser>{
        const validate = SUser.safeParse({ name, email, password, createdAt });
        if (!validate.success) {
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const create = await this.RepoUser.CreateUser({name, email, password, createdAt});
        if ('id' in create && typeof create.id === 'string') {
            console.log("Calling CreateStatistics with userId:", create.id);
            await this.serviceStatistics.CreateStatistics(create.id);
        }
        return create;
    }
    async UpdateUsers(data:IUser ,id: string): Promise<IUser>{        
        const validate = SUser.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.RepoUser.UpdateUser(data, id);
        return update;
    }

    async ListUsers(): Promise<IUser[]>{
        const read = await this.RepoUser.ListUsers();
        return read;
    }

    async DeleteUser(id:string): Promise<IUser>{
        const delet = await this.RepoUser.DeleteUser(id);
        return delet; 
    }
    
}