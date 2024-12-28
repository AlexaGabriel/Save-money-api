import { z } from "zod";

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
