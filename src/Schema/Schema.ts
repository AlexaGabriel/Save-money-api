import { z } from "zod";

export const SUser = z.object({
    name: z.string().min(3, "Name must have at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string(),
    createdAt: z.date() 
});

export const STransactions = z.object({
    userId: z.string().uuid({ message: "Invalid userId format. It must be a valid UUID." }),
    type: z.enum(["income", "expense"], { message: "Type must be either 'income' or 'expense'." }),
    amount: z.number().positive({ message: "Amount must be a positive number." }),
    category: z.string().min(1, { message: "Category must not be empty." }),
    date: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}),
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
