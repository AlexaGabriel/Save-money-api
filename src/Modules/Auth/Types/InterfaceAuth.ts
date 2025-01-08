/* eslint-disable no-unused-vars */
export interface IAuth{
    id: string;
    name:string;
    email:string
    password:string;
}
export interface IRepoAuth{
    AuthUser(data: IAuth): Promise<IAuth|null>
}
