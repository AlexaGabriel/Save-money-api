import {IRepoUser, IUser} from "../Interface/InterfaceUsers";
import { SUser } from "../Schema/Schema";
import { RepoUser } from "../Repository/RepoUser";

export class serviceUser{
    private RepoUser: IRepoUser;
    constructor() {
        this.RepoUser = new RepoUser;
    }
    async CreateUser({name, email, password, createdAt}: IUser): Promise<IUser>{
        const validate = SUser.safeParse({name, email, password, createdAt});
        if (!validate.success) {
            throw new Error(`Invalid user data in: ${Error}`);
        }
        const create = await this.RepoUser.CreateUser({name, email, password, createdAt});
        return create;
    }

    async UpdateUsers(data:IUser ,id: string): Promise<IUser>{
        const validate = SUser.safeParse(data);
        if(!validate.success){
            throw new Error(`Invalid user data in: ${Error}`);
        }
        const update = await this.RepoUser.UpdateUser(data, id);
        return update;
    }

    async ReadUsers(): Promise<IUser[]>{
        const read = await this.RepoUser.ReadUsers();
        return read;
    }
    
}