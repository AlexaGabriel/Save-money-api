/* eslint-disable no-unused-vars */
export interface IUser{
    name:string;
    email:string
    password:string;
    createdAt:Date;
}
export interface IRepoUser{
    CreateUser(data: IUser): Promise<IUser>
    UpdateUser(data: IUser, id: string): Promise<IUser>
    ListUsers(): Promise<IUser[]>
    DeleteUser(id:string): Promise<IUser>
}
