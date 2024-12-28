/* eslint-disable no-unused-vars */
export interface IGoal {
    userId?: string; 
    name: string; 
    targetAmount: number; 
    currentAmount: number; 
    deadline: Date; 
    createdAt: Date; 
  }

export interface IRepoGoal {
    CreateGoal(data:IGoal): Promise<IGoal>;
    ListGoal(userId: string, id: string): Promise<IGoal | null>;
    ListAllGoal(userId: string):Promise<IGoal[]>
    UpdateGoal(id: string, data: IGoal): Promise<IGoal>;
    DeleteGoal(id: string): Promise<IGoal>;
}