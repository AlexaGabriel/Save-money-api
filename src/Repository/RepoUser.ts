import { prisma } from "../database/prisma";
import {IUser, IRepoUser} from "../Interface/InterfaceUsers";

export class RepoUser implements IRepoUser{
    async CreateUser(data: IUser): Promise<IUser> {
        const Create = prisma.user.create({
            data
        });
        return Create;
    }
    async UpdateUser(data: IUser, id: string): Promise<IUser> {
        const Update = prisma.user.update({
            where:{
                id
            },
            data
        });
        return Update;

    }
    async ReadUsers(): Promise<IUser[]> {
        const Read = prisma.user.findMany({});
        return Read;
    }
    
}