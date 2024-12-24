import { prisma } from "../database/prisma";
import {IUser, IRepoUser} from "../Interface/InterfaceUsers";

export class RepoUser implements IRepoUser{
    async CreateUser({name, email, password, createdAt}: IUser): Promise<IUser> {
        const Create = await prisma.user.create({
            data:{
                name,
                email,
                password,
                createdAt
            }
        });
        return Create;
    }
    async UpdateUser(data: IUser, id: string): Promise<IUser> {
        const Update = await prisma.user.update({
            where:{
                id
            },
            data
        });
        return Update;

    }
    async ListUsers(): Promise<IUser[]> {
        const Read = await prisma.user.findMany({});
        return Read;
    }
    
}