/* eslint-disable no-unused-vars */
export interface IStatistics {
    userId: string; 
    totalIncome: number; 
    totalExpense: number; 
    balance: number; 
    updatedAt: Date; 
  }
  export interface IRepoStatistics {
    CreateStatistics(userId: string): Promise<IStatistics>;
    ListStatistics(userId: string): Promise<IStatistics|null>;
    UpdateStatistics(id: string, data: IStatistics): Promise<IStatistics>;
  }
 