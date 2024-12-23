import { z } from "zod";

export const SUser = z.object({
    name: z.string().min(3, "Name must have at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string(),
    createdAt: z.date() 
});

export const STransactions = z.object({
    userId: z.string(),
    type: z.enum(["income", "expense"]),
    amount: z.number(),
    category: z.string(),
    date: z.date() 
});

export const SStatistics = z.object({
    userId: z.string(),
    totalIncome: z.number(),
    totalExpense: z.number(),
    balance: z.number(),
    updateAt: z.date() 
});

export const SGoal = z.object({
    userId: z.string(),
    name: z.string().min(3, "Goal name must have at least 3 characters"),
    targetAmount: z.number(),
    currentAmount: z.number(),
    deadline: z.date(), 
    createdAt: z.date() 
});

export const SBill = z.object({
    userId: z.string(),
    name: z.string().min(3, "Bill name must have at least 3 characters"),
    amount: z.number(),
    dueDate: z.date(), 
    isPaid: z.boolean(),
    createdAt: z.date() 
});
