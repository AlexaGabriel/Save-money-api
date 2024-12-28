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
export const STransactionsU = z.object({
    type: z.enum(["income", "expense"], { message: "Type must be either 'income' or 'expense'." }),
    amount: z.number().positive({ message: "Amount must be a positive number." }),
    category: z.string().min(1, { message: "Category must not be empty." }),
    date: z.string().refine((value) => !isNaN(Date.parse(value)), {message: "Invalid date format.",})
});

export const SStatistics = z.object({
    totalIncome: z.number().min(0, { message: "Total income must be zero or a positive number." }),
    totalExpense: z.number().min(0, { message: "Total expense must be zero or a positive number." }),
    balance: z.number()
  });

export const SGoal = z.object({
    userId: z.string(),
    name: z.string().min(3, "Goal name must have at least 3 characters"),
    targetAmount: z.number().positive({ message: "Amount must be a positive number." }),
    currentAmount: z.number(),
    deadline: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}), 
    createdAt: z.date() 
});
export const SGoalU = z.object({
    name: z.string().min(3, "Goal name must have at least 3 characters"),
    targetAmount: z.number().positive({ message: "Amount must be a positive number." }),
    currentAmount: z.number(),
    deadline: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}), 
    createdAt: z.date() 
});

export const SBill = z.object({
    userId: z.string(),
    name: z.string().min(3, "Bill name must have at least 3 characters"),
    amount: z.number(),
    dueDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}),
    isPaid: z.boolean(),
    createdAt: z.date() 
});
export const SBillU = z.object({
    name: z.string().min(3, "Bill name must have at least 3 characters"),
    amount: z.number(),
    dueDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}), 
    isPaid: z.boolean(),
    createdAt: z.date() 
});
