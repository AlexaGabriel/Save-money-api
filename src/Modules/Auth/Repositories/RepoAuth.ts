import { prisma } from "../../../database/prisma";
import {IAuth, IRepoAuth} from "../Types/InterfaceAuth";

export class RepoAuth implements IRepoAuth{

    async AuthUser(data: IAuth): Promise<IAuth | null> {
        const user = await prisma.user.findUnique({where:{email: data.email}});
        return user;
    }
    
}