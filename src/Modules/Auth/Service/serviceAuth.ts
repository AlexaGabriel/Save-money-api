
import { RepoAuth } from "../Repositories/RepoAuth";
import { IAuth, IRepoAuth } from "../Types/InterfaceAuth";

export class serviceAuth{
    private RepoAuth: IRepoAuth;
    constructor() {
        this.RepoAuth = new RepoAuth;
    }
    async AuthUser(data: IAuth): Promise<IAuth | null> {
        const user = await this.RepoAuth.AuthUser(data);
        return user;
    }
    
}