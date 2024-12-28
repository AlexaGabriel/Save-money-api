import { z } from "zod";

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

