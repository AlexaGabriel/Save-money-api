import {z} from "zod";

export const SUser = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.string().date()
});

export const STransactions = z.object({
    userId: z.string(),
    type: z.enum(["income", "expense"]),
    amount: z.number(),
    category: z.string(),
    date: z.string().date()
});

export const SStatistics = z.object({
    userId: z.string(),
    totalIncome: z.number(),
    totalExpense: z.number(),
    balance: z.number(),
    updateAt: z.string().date()
});

export const SGoal = z.object({
    userId: z.string(),
    name: z.string().min(3),
    targetAmount: z.number(),
    currentAmount: z.number(),
    deadline: z.string().date(),
    createdAt: z.string().date()
});

export const SBill = z.object({
    userId: z.string(),
    name: z.string().min(3),
    amount: z.number(),
    dueDate: z.string().date(),
    isPaid: z.boolean(),
    createdAt: z.string().date()
});
