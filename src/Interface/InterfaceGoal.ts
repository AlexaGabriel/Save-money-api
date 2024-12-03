interface IGoal {
    id: string; 
    userId: string; 
    name: string; 
    targetAmount: number; 
    currentAmount: number; 
    deadline: Date; 
    createdAt: Date; 
  }
export default IGoal;