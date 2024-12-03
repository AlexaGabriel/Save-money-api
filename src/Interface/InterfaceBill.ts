interface IBill {
    id: string; 
    userId: string; 
    name: string; 
    amount: number; 
    dueDate: Date; 
    isPaid: boolean; 
    createdAt: Date; 
  }

export default IBill;